/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/react-in-jsx-scope */
import { MapContainer, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";
import { ChangeView } from "../../ChangeView";
import MapMarker, { PersonMarker } from "../../Components/MapMarker";
import firebase from "firebase/app";
import 'firebase/database';
import { config, analytics } from "../../config";
import {
  FirebaseDatabaseNode,
  FirebaseDatabaseProvider,
} from "@react-firebase/database";
import Legend from "../../Legend";
import Model from "../../Components/Modal";
import { AddMarkerToClick } from "../../MarkerOnclick";
import { nanoid } from "nanoid";
import { getCookie, setCookie } from "../../utils/cookie-utils";
import { sha256 } from "js-sha256";
import { Detector } from "react-detect-offline";
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

function MapView() {
  const [latlng, setlatlng] = useState({ lat: 22.94083, lng: 97.74459 });
  const [modelVisible, setModelVisible] = useState(false);
  const [lastLstate, setlastLstate] = useState(false);
  const [newMarkID, setnewMarkID] = useState("NULL");
  // const [selectedMarkerId, setSelectedMarkerId] = useState("");

  function notiCall( notiType = false ){
    if( notiType ) {
      Toast.fire({
        icon: 'success',
        title: 'Connected'
      });
    } else {
      Toast.fire({
        icon: 'error',
        title: 'Disconnected '
      });
    }
  }

  const [selectedLatLng, setSelectedLatLng] = useState({
    lat: 22.94083,
    lng: 97.74459,
  });
  const [userPositon, setUserPosition] = useState({
    lat: 22.94083,
    lng: 97.74459,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setlatlng({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
      setUserPosition({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return (
    <>
      <Detector
        render={({ online }) => {
          if(lastLstate !== online) { setlastLstate(online); notiCall(online); }
          return null
        }}
      />

      <Model
        visible={modelVisible}
        onOkClick={(e) => {
          var uniqueID = nanoid();
          setnewMarkID( uniqueID );
          //console.log(newMarkID);
          var saveLocation = `locations/${ newMarkID }`;
          firebase.database().ref(saveLocation).set({
            created_at: Date.now(),
            id: nanoid(),
            unitSize: e.unitSize,
            message: e.message,
            position: {
              lat: selectedLatLng.lat,
              lng: selectedLatLng.lng,
            },
            type: e.objType,
          }, (error) => {
            if (error) {
              // The write failed...
              Swal.fire(
                'Error!',
                'Adding new marker Failed! You do not have permission. Please Login as Admin.',
                'error'
              )
              analytics.logEvent('add_error', { ErrorMsg : error.message });
            } else {
              // Data saved successfully!
              Swal.fire(
                'Success!',
                'New marker has been added.',
                'success'
              )
              analytics.logEvent('add_marker', { Fid :  newMarkID.toString() });
            }
          });
          setModelVisible(false);
        }}
        onCancelClick={() => {
          setModelVisible(false);
        }}
      ></Model>

      <FirebaseDatabaseProvider firebase={firebase} {...config}>
        <div className="location-selector-wrapper">
          <div className="location-selector">
            <select 
              onChange={(e) => {
                setlatlng({
                  lat: parseFloat(e.target.value.split("|")[0]),
                  lng: parseFloat(e.target.value.split("|")[1]),
                });
                defaultValue ='22.94083|97.74459'
              }}
            > 
              <option value="22.94083|97.74459">လားရှိုး (Lashio)</option>
              <option value="16.8409|96.1735"> ရန်ကုန် (Yangon)</option>
              <option value="21.9588|96.0891"> မန္တလေး (Mandalay)</option>
              <option value="19.7633|96.0785">နေပြည်တော် (Naypyi Daw)</option>
            </select>
          </div>
        </div>
        <MapContainer
          style={{ height: `100vh` }}
          center={[latlng.lat, latlng.lng]}
          zoom={13}
          zoomControl={true}
          scrollWheelZoom={true}
        >
          <AddMarkerToClick
            onMapClick={(e) => {
              if (getCookie("MASTER_LOGIN") === "exists") {
                setSelectedLatLng({ lat: e.lat, lng: e.lng });

                setModelVisible(true);
              } else {
                (async () => {

                const { value: enterPass } = await Swal.fire({
                  title: 'Please enter Master Password!',
                  input: 'password',
                  inputLabel: 'Master Password',
                  inputValue: '',
                  showCancelButton: true,
                  inputAttributes: {
                    minlength: 8,
                    autocapitalize: 'off',
                    autocorrect: 'off'
                  }
                });
                if ( enterPass && sha256(btoa(enterPass)) === process.env.REACT_APP_MASTER_KEY )
                 {
                  Toast.fire({
                    icon: 'success',
                    title: 'Master Logined! '
                  });
                  setSelectedLatLng({ lat: e.lat, lng: e.lng });
                  analytics.logEvent('master_login');

                  setModelVisible(true);
                  setCookie("MASTER_LOGIN", "exists", 3);
                } else {
                  if(enterPass != null) {
                    Toast.fire({
                      icon: 'error',
                      title: 'Password Failed! '
                    });
                  } else {
                    Toast.fire({
                      icon: 'error',
                      title: 'Master Canceled!'
                    });
                    //console.log(" Pass : "+ enterPass);
                  }
                }
               })()
              }
            }}
          />
          <ChangeView center={[latlng.lat, latlng.lng]} zoom={13} />

          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors, <a href="https://www.hotosm.org/" target="_blank" rel="noreferrer">Humanitarian OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <PersonMarker
            position={[userPositon.lat, userPositon.lng]}
            message="သင်ရဲ့ လက်ရှိတည်နေရာ"
          />
          <FirebaseDatabaseNode path="locations">
            {(d) => {
              return (
                <>
                  {!d.isLoading && d.value && 
                    Object.keys(d.value).map((i) => {
                      return (
                        <MapMarker
                          key={i}
                          {...d.value[i]}
                          fbKey={i}
                          onMarkerClick={(e, fbKey, id) => {
                            if (getCookie("MASTER_LOGIN") === "exists") {
                              Swal.fire({
                                title: 'Are you sure to delete?',
                                text: "You won't be able to revert this!",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Yes, delete it!'
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  firebase.database().ref("locations/" + fbKey).remove().then(() => {
                                    // File deleted successfully
                                    analytics.logEvent('delete_marker', { Fid : fbKey.toString() });
                                    Swal.fire(
                                      'Deleted!',
                                      'Marker has been deleted.',
                                      'success'
                                    )
                                  }).catch((error) => {
                                    // Uh-oh, an error occurred!
                                    Swal.fire(
                                      'Error!',
                                      'You do not have permission to delete marker. Login to your Admin account.',
                                      'error'
                                    )
                                    analytics.logEvent('delete_error', { ErrorMsg : error.message });
                                  });
                                  
                                }
                              });
                            } else {
                              (async () => {

                                const { value: enterPassA } = await Swal.fire({
                                  title: 'Please enter Master Password!',
                                  input: 'password',
                                  inputLabel: 'Master Password',
                                  inputValue: '',
                                  showCancelButton: true,
                                  inputAttributes: {
                                    minlength: 8,
                                    autocapitalize: 'off',
                                    autocorrect: 'off'
                                  }
                                });
                                if ( enterPassA && sha256(btoa(enterPassA)) === process.env.REACT_APP_MASTER_KEY) 
                                {
                                  Toast.fire({
                                    icon: 'success',
                                    title: 'Master Logined! '
                                  });
                                  analytics.logEvent('master_login');
                                  setCookie("MASTER_LOGIN", "exists", 3);
                                  Swal.fire({
                                    title: 'Are you sure to delete?',
                                    text: "You won't be able to revert this!",
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Yes, delete it!'
                                  }).then((result) => {
                                    if (result.isConfirmed) {
                                      firebase.database().ref("locations/" + fbKey).remove().then(() => {
                                        // File deleted successfully
                                        analytics.logEvent('delete_marker', { Fid : fbKey.toString() });
                                        Swal.fire(
                                          'Deleted!',
                                          'Marker has been deleted.',
                                          'success'
                                        )
                                      }).catch((error) => {
                                        // Uh-oh, an error occurred!
                                        Swal.fire(
                                          'Error!',
                                          'You do not have permission to delete marker. Login to your Admin account.',
                                          'error'
                                        )
                                        analytics.logEvent('delete_error', { ErrorMsg : error.message });
                                      });
                                      
                                    }
                                  });
                                } else {
                                  if(enterPassA != null) {
                                    Toast.fire({
                                      icon: 'error',
                                      title: 'Password Failed! '
                                    });
                                  } else {
                                    Toast.fire({
                                      icon: 'error',
                                      title: 'Master Canceled!'
                                    });
                                    //console.log(" Pass : "+ enterPassA);
                                  }
                                }
                              })()
                            }
                          }}
                        />
                      );
                    })}
                </>
              );
            }}
          </FirebaseDatabaseNode>
          <Legend></Legend>
        </MapContainer>
      </FirebaseDatabaseProvider>
    </>
  );
}

export default MapView;
