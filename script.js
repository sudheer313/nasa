
        function bodyload(){
            fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&quot")
            .then(function(response){
                return response.json();
            })
            .then(function(mars){
                for(var item of mars.photos){
                    var tr = document.createElement("tr");
                    var tdId = document.createElement("td");
                    var tdPhoto = document.createElement("td");
                    var tdCamera = document.createElement("td");
                    var tdRover = document.createElement("td");

                    tdId.innerHTML = item.id;
                    tdPhoto.innerHTML = `
                     <a href=${item.img_src} target="_blank"><img src=${item.img_src} width="100" height="100"></a>
                    `;
                    tdCamera.innerHTML = item.camera.full_name;
                    tdRover.innerHTML = item.rover.name;

                    tr.appendChild(tdId);
                    tr.appendChild(tdPhoto);
                    tr.appendChild(tdCamera);
                    tr.appendChild(tdRover);

                    document.querySelector("tbody").appendChild(tr);

                }
            })
        }
 