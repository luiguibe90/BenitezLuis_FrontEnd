window.addEventListener("DOMContentLoaded", function (e) {
    const apiURL = "https://bp-marvel-api.herokuapp.com/"
    const params = {
        idAuthor: 1
    }

    axios.get(apiURL + "marvel-characters", {
        params: {
            ...params
        }
    })
        .then(element => {
            console.log(element.data[0])
            var element_container = this.document.querySelector('.container');
            element_container.innerHTML = '';
            const fragment = document.createDocumentFragment()
            for (let index = 0; index < element.data.length; index++) {
                const elemento = element.data[index];
                element.innerHTML += `
                <div class="item-element">
                <div class="item-element-content">
                    <div id="${index}" class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                          <div class="col-md-4">
                            <img src="${elemento.image}" class="container_Img" alt="...">
                          </div>
                          <div class="col-md-8">
                            <div class="card-body">
                              <h5 class="card-title">${elemento.title}</h5>
                              <p class="card-text">${elemento.body}</p>
                            </div>
                          </div>

                        </div>
                      </div>
    
                </div>
    
                </div>
                
                `;
                /*${userInfo._id}- ${userInfo.title}-${userInfo.body}- ${userInfo.image}-${userInfo.category}- ${userInfo.idAuthor}-${userInfo.createdAt}- ${userInfo.updateAt}*/


            }

        });
})

