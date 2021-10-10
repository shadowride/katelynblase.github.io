$.ajax({
    url: "https://geolocation-db.com/jsonp",
    jsonpCallback: "callback",
    dataType: "jsonp",
    success: function(location) {
        // console.log(location);
        // console.log(location.country_code);
        // console.log(location.country_name);
        // console.log(location.latitude);
        // console.log(location.longitude);
        // console.log(location.IPv4);
        
        // if(location.country_name === "USA") {
            //     console.log(location.country_name);
            //     $('#country').html(location.country_name);
            // }

        console.log("");
    }
});
