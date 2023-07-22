$(document).ready(function(){

    $('#get-digimons').click(function(e){
        const url = 'https://digimon-api.vercel.app/api/digimon';

        fetch(url)
            .then((response) => response.json())
            .then((digimons) => {
                //console.log(digimons)
                const list = $('#tbody-list');
                let digimonList = '';
                for(let index = 0; index < digimons.length; index++){
                    const digimon = digimons[index];
                    digimonList = digimonList + `<tr class="col-12">
                                                        <td class="col-4">${digimon.name}</td>
                                                        <td class="col-4">${digimon.level}</td>
                                                        <td class="col-4"><img src="${digimon.img}" alt="" class="img-fluid" width="150px" height="150px"></td>
                                                </tr>`
                };
            list.empty();
            list.append(digimonList);
            });
    });

    $('#get-digimon').click(function(e){
        
        let digimon_name = $('#search-digimon').val();
        const url = `https://digimon-api.vercel.app/api/digimon/name/${digimon_name}`;

        fetch(url)
            .then(response => response.json())
            .then(digimons => {
                //console.log({digimon})
                
                let detail = $('#digimon-detail');
                let digimonDetail = '';
                for(let index = 0; index < digimons.length; index++){
                    const digimon = digimons[index];

                    digimonDetail = digimonDetail + `<thead>
                                                        <tr class="col-12">
                                                        <th class="col-4">Nombre</th>
                                                        <th class="col-4">Nivel</th>
                                                        <th class="col-4">Imagen</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody class="col-12">
                                                        <tr>
                                                            <td class="col-4">${digimon.name}</td>
                                                            <td class="col-4">${digimon.level}</td>
                                                            <td class="col-4"><img src="${digimon.img}" alt="" class="img-fluid" width="150px" height="150px"></td>
                                                        </tr>
                                                    </tbody>`
                };

                detail.empty();
                detail.append(digimonDetail);
            });                
    });
});

