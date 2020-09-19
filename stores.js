const markersCity = [];
const list = document.getElementById('store-list');

stores.features.forEach(function (store, index) {
[..]
    const city = store.properties.city;
    const address = store.properties.address;
    const location = store.geometry.coordinates;
    const marker = new tt.Marker({}).setLngLat(location).setPopup(new tt.Popup({offset: 35}).setHTML(address)).addTo(map);
    markersCity[index] = {marker, city};
    let cityStoresList = document.getElementById(city);
    if (cityStoresList === null) {
        const cityStoresListHeading = list.appendChild(document.createElement('h3'));
        cityStoresListHeading.innerHTML = city;
        cityStoresList = list.appendChild(document.createElement('div'));
        cityStoresList.id = city;
        cityStoresList.className = 'list-entries-container';
        cityStoresListHeading.addEventListener('click', function (e) {
            map.fitBounds(getMarkersBoundsForCity(e.target.innerText), {padding: 50});
        });
    }
    const details = buildLocation(cityStoresList, address);

    function getMarkersBoundsForCity(city) {
        const bounds = new tt.LngLatBounds();
        markersCity.forEach(markerCity => {
            if (markerCity.city === city) {
                bounds.extend(markerCity.marker.getLngLat());
            }
        });
        return bounds;
    }
    [..]