/******************************************************************* */
/*                          IMAGES DEFILANTES                                  */
/******************************************************************* */

$(document).ready(function() {
    $('#slider1').tinycarousel({
        infinite: true,
        interval: true,
        intervalTime: 2000,
        animationTime : 2000
    });
});    





/********************************************************************* */
/*                            LIENS                                    */
/********************************************************************* */

function API(i)
{
    switch (i)
    {
        case 1:
            /* ************************* API COCKTAIL DB --> Non retenu car pb avec fichier Json *****************/
            // var settings = 
            // {
            //     "async": true,
            //     "crossDomain": true,
            //     "url": "https://the-cocktail-db.p.rapidapi.com/search.php?i=vodka",
            //     "method": "GET",
            //     "dataType" : "json",
            //     "headers": {
            //         "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            //         "x-rapidapi-key": "351d3602aemshb8f7ac267a65af3p1c4cf6jsnabfcb77b5785"
            //     }
            // }
            
            // $.ajax(settings).done(function (response) {
            //     let data = JSON.stringify(response);
            //     $('#contenu').html(data['strDescription'][0]);      // affiche JSON dans "contenu"
            //     console.log(data['strDescription'][0]);
            // });

            /***********************************************************************************************/
            
           $.get("http://localhost/Site%20Ajax/JSON/saumon.json", function(data){
                $('#Ingredients').html('');
                console.log(data);
                $('#titre').html(data.name);
                $('#Ingredients').html('Ingredients :');
                for (let i in data.ingredients)
                {
                    $('#Ingredients').append('<li>' + data['ingredients'][i] + '</li>');
                };
            // $('#Ingredients').html(data['ingredients'][0]);
                $('#Preparation').html(data.preparation);
                $('#photo').html('<img src="' + data.picture + '">');
            })
        
        break;

        case 2:

            $.get("http://localhost/Site%20Ajax/JSON/tajine.json", function(data){
                $('#Ingredients').html('');
                console.log(data);
                $('#titre').html(data.name);
                $('#Ingredients').html('Ingredients :');
                for (let i in data.ingredients)
                {
                    $('#Ingredients').append('<li>' + data['ingredients'][i] + '</li>');
                };
                // $('#Ingredients').html(data.ingredients);
                $('#Preparation').html(data.preparation);
                $('#photo').html('<img src="' + data.picture + '">');
            })

        break;

        case 3:
            /* ******************** EXEMPLE D'API QUI FONCTIONNE  ***************************
             
            $(document).ready(function () {
                $.ajax("https://www.data.gouv.fr/api/1/organizations/premier-ministre/", {
                  success: function(data) {
                    $('#contenu').append(data.description);     // Affiche le texte
                    $('#contenu').html('<img src="' + data.logo + '">');      // Affiche le logo
                    console.log(data);
                    }
                });
            });

            // *************************************************************************/

            $.get("http://localhost/Site%20Ajax/JSON/tarte.json", function(data){
                $('#Ingredients').html('');
                console.log(data);
                $('#titre').html(data.name);
                $('#Ingredients').html('Ingredients :');
                for (let i in data.ingredients)
                    {
                        $('#Ingredients').append('<li>' + data['ingredients'][i] + '</li>');
                    };
                //$('#Ingredients').html(data.ingredients);
                $('#Preparation').html(data.preparation);
                $('#photo').html('<img src="' + data.picture + '">');
            })

        break;
    }
};

/************************************************************************************** */
/*                              TEST - NE PAS CONSIDERER                                */
// pageOK=true;

// if (pageOK)
// {
//     $('#test').animate({left: '90%'}, 7000);
// };