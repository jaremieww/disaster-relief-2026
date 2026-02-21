import GoogleMapReact from 'google-map-react';
import type { ICenters } from './types';

const AnyReactComponent = ({ text }: { text: string }) => <div>{text}</div>;

interface CenterMapViewProps {
    centers: ICenters;
}
    

export const CenterMapView = ({ centers }: CenterMapViewProps) =>{        

    const defaultProps = {
        center: {
          lat: 33,
          lng: -84
        },
        zoom: 5
      };
      const Markers = () => {
        return (
          <AnyReactComponent
            lat={33}
            lng={-84}
            text="Somewhere"
          />
        );
      }
    // const Markers = () => {
    //   const markers = centers.map((center: any) => ({
    //     key: center.id, 
    //     lat: center.latitude,
    //     lng: center.longitude,
    //     text: center.centerName
    //   }));
    //   return markers;
    // };

    const centerMarkers = centers.map((center) => (
        <AnyReactComponent
          key={center.id} 
          lat={center.latitude}
          lng={center.longitude}
          text={center.centerName}
        />
      ));



    return (
        <>
            <div>
                <h3>Look at a map.</h3>
                    <div className="h-96 w-200">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* {Markers()} */}
        {/* {<AnyReactComponent
          lat={33}
          lng={-84}
          text="My Marker"
        />} */}
        {Markers()}   
      </GoogleMapReact>
    </div>
            </div>
            
        </>
    );
}