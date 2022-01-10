import React, { useEffect } from 'react';

const { kakao } = window;

const MapContainer = ({}) => {

  useEffect(() => {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
      mapOption = {
          center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨
    };  

    var map = new kakao.maps.Map(mapContainer, mapOption); 

    var geocoder = new kakao.maps.services.Geocoder();
    
    let infowindow = new kakao.maps.InfoWindow({zIndex:1});

    geocoder.addressSearch('서울시' , function(result, status) { //'<%= userInfo %>' 이게 서울시 이기 때문에 지도에 바로 서울시가 찍힌다.
      // 정상적으로 검색이 완료됐으면 
       if (status === kakao.maps.services.Status.OK) {
          var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
  
          // 결과값으로 받은 위치를 마커로 표시합니다
          var marker = new kakao.maps.Marker({
              map: map,
              position: coords
          });
        
          // 인포윈도우로 장소에 대한 설명을 표시합니다
          var infowindow = new kakao.maps.InfoWindow({
              content: '<div style="width:150px;text-align:center;padding:6px 0;">지니마켓</div>'
          });
          infowindow.open(map, marker);
  
          // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
          map.setCenter(coords);
      // console.log(coords);
          console.log('천호동')
      } 
  });    
      
  displayMarker('천호동')
      function displayMarker(place) {
          let marker = new kakao.maps.Marker({
              map: map,
              position: new kakao.maps.LatLng(place.y, place.x) 
          });
          
          // 마커에 클릭이벤트를 등록
kakao.maps.event.addListener(marker, 'click', function() {
  // 마커를 클릭하면 장소명이 인포윈도우에 표출
  infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
  infowindow.open(map, marker);

 
});

var geocoder = new kakao.maps.services.Geocoder();

//=====================

kakao.maps.event.addListener(map, 'idle', function() {
  searchAddrFromCoords(map.getCenter(), displayCenterInfo);
});

function searchAddrFromCoords(coords, callback) {
  // 좌표로 행정동 주소 정보를 요청합니다
  geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);         
}

function searchDetailAddrFromCoords(coords, callback) {
  // 좌표로 법정동 상세 주소 정보를 요청합니다
  geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
}

// 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
function displayCenterInfo(result, status) {
  if (status === kakao.maps.services.Status.OK) {
      var infoDiv = document.getElementById('centerAddr');

      for(var i = 0; i < result.length; i++) {
          // 행정동의 region_type 값은 'H' 이므로
          if (result[0].region_type === 'H') {
              infoDiv.innerHTML = result[0].address_name;
              break;
          }
      }
  }    
}

//=========================


  kakao.maps.event.addListener(map, 'click', function(mouseEvent) {

    searchDetailAddrFromCoords(mouseEvent.latLng, function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
          
            var detailAddr = !!result[0].road_address ? '<div>도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
            detailAddr += '<div>지번 주소 : ' + result[0].address.address_name + '</div>';
            
            var content = '<div class="bAddr">' +
                            '<span class="title">주소정보</span>' + 
                            detailAddr + 
                        '</div>';

                        // console.log(content)

            // 마커를 클릭한 위치에 표시합니다 
            marker.setPosition(mouseEvent.latLng);
            marker.setMap(map);

            // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
            infowindow.setContent(content);
            infowindow.open(map, marker);
        }   
    });
  });

      }
  }, []);
  

  return (
      <div id='map' style={{
          width: '500px', 
          height: '500px'
      }}></div>
  );
}


export default MapContainer;