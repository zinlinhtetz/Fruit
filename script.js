function search() {
    var fruits = document.getElementById('t_search').value;  
    var fruit1 = fruits.trim();
    var fruit = fruit1.toLowerCase();
    
    if (fruit == '') {
        // alert("Please enter a fruit name");
    } else {
        document.getElementById('t_search').value = '';
        document.getElementById('benefit').style.display = "block";
        document.getElementById('benefits').style.display = "block";

        var fav_fruit = document.getElementById("fruit");
        var benefits = document.getElementById("benefits");

        switch (fruit) {
            case 'apple':
                fav_fruit.innerHTML = "Apple";
                benefits.innerHTML = "Apples are rich in fiber and antioxidants, which can help reduce the risk of chronic diseases like diabetes, heart disease, and cancer. They also support gut health and may aid in weight management.";
                break;
            case 'orange':
                fav_fruit.innerHTML = "Orange";
                benefits.innerHTML = "Oranges are an excellent source of vitamin C, which supports immune function, skin health, and wound healing. They also contain antioxidants that help reduce inflammation and protect against chronic diseases.";
                break;
            case 'pineapple':
                fav_fruit.innerHTML = "Pineapple";
                benefits.innerHTML = "Pineapple contains bromelain, an enzyme with anti-inflammatory properties that can aid digestion and reduce pain. It’s also rich in vitamin C, which supports immune health and skin elasticity.";
                break;
            case 'banana':
                fav_fruit.innerHTML = "Banana";
                benefits.innerHTML = "Bananas are high in potassium, which helps regulate blood pressure and supports heart health. They’re also a good source of vitamin B6 and fiber, aiding digestion and energy levels.";
                break;
            case 'strawberry':
                fav_fruit.innerHTML = "Strawberry";
                benefits.innerHTML = "Strawberries are packed with vitamin C, manganese, and antioxidants. They help reduce inflammation, support heart health, and may lower the risk of chronic diseases.";
                break;
            case 'mango':
                fav_fruit.innerHTML = "Mango";
                benefits.innerHTML = "Mangoes are rich in vitamins A and C, which support immune function, eye health, and skin health. They also contain antioxidants that may reduce the risk of certain cancers.";
                break;
            case 'kiwi':
                fav_fruit.innerHTML = 'Kiwi';
                benefits.innerHTML = 'Kiwis are high in vitamin C and fiber, which support immune health and digestion. They also contain antioxidants that may help reduce inflammation and improve heart health.';
                break;
            case 'watermelon':
                fav_fruit.innerHTML = 'Watermelon';
                benefits.innerHTML = 'Watermelon is hydrating and rich in vitamins A and C, which promote skin health and immune function. It also contains lycopene, an antioxidant that may support heart health.';
                break;
            case 'guava':
                fav_fruit.innerHTML = 'Guava';
                benefits.innerHTML = 'Guavas are high in vitamin C, fiber, and antioxidants. They support immune health, aid digestion, and may help regulate blood sugar levels.';
                break;
            case 'lemon':
                fav_fruit.innerHTML = 'Lemon';
                benefits.innerHTML = 'Lemons are rich in vitamin C, which boosts immunity and supports skin health. They also aid digestion and may help prevent kidney stones.';
                break;
            case 'cherry':
                fav_fruit.innerHTML = 'Cherry';
                benefits.innerHTML = 'Cherries are rich in antioxidants and anti-inflammatory compounds. They may help reduce muscle soreness, improve sleep quality, and support heart health.';
                break;
            case 'avocado':
                fav_fruit.innerHTML = 'Avocado';
                benefits.innerHTML = 'Avocados are high in healthy fats, fiber, and potassium. They support heart health, aid digestion, and may help with weight management.';
                break;
            case 'pomegranate':
                fav_fruit.innerHTML = 'Pomegranate';
                benefits.innerHTML = 'Pomegranates are rich in antioxidants, which may reduce inflammation and support heart health. They also contain vitamins C and K, promoting immune and bone health.';
                break;
            case 'fig':
                fav_fruit.innerHTML = 'Fig';
                benefits.innerHTML = 'Figs are high in fiber, potassium, and antioxidants. They support digestive health, regulate blood pressure, and may improve bone density.';
                break;
            case 'coconut':
                fav_fruit.innerHTML = 'Coconut';
                benefits.innerHTML = 'Coconuts are rich in healthy fats, which support heart health and provide quick energy. They also contain antioxidants that protect against cell damage.';
                break;
            case 'apricot':
                fav_fruit.innerHTML = 'Apricot';
                benefits.innerHTML = 'Apricots are high in vitamin A and fiber, which support eye health and digestion. They also contain antioxidants that may reduce inflammation.';
                break;
            case 'grape':
                fav_fruit.innerHTML = 'Grape';
                benefits.innerHTML = 'Grapes are rich in antioxidants like resveratrol, which may protect against heart disease and cancer. They also support immune health and digestion.';
                break;
            case 'pear':
                fav_fruit.innerHTML = 'Pear';
                benefits.innerHTML = 'Pears are high in fiber, which aids digestion and supports heart health. They also contain antioxidants that may reduce inflammation.';
                break;
            case 'blueberry':
                fav_fruit.innerHTML = 'Blueberry';
                benefits.innerHTML = 'Blueberries are packed with antioxidants, which may improve brain function, support heart health, and reduce inflammation.';
                break;
            case 'blackberry':
                fav_fruit.innerHTML = 'Blackberry';
                benefits.innerHTML = 'Blackberries are rich in vitamin C, fiber, and antioxidants. They support immune health, aid digestion, and may reduce inflammation.';
                break;
            case 'durian':
                fav_fruit.innerHTML = 'Durian';
                benefits.innerHTML = 'Durian is rich in vitamins, minerals, and antioxidants. It may boost energy levels, support immune health, and improve digestion.';
                break;
            case 'gooseberry':
                fav_fruit.innerHTML = 'Gooseberry';
                benefits.innerHTML = 'Gooseberries are high in vitamin C and antioxidants. They may support immune health, improve digestion, and reduce inflammation.';
                break;
            case 'jackfruit':
                fav_fruit.innerHTML = 'Jackfruit';
                benefits.innerHTML = 'Jackfruit is rich in fiber, vitamins, and antioxidants. It supports digestion, immune health, and may help regulate blood sugar levels.';
                break;
            case 'plum':
                fav_fruit.innerHTML = 'Plum';
                benefits.innerHTML = 'Plums are high in fiber and antioxidants. They support digestive health, improve bone density, and may reduce inflammation.';
                break;
            case 'kumquat':
                fav_fruit.innerHTML = 'Kumquat';
                benefits.innerHTML = 'Kumquats are rich in vitamin C and fiber. They support immune health, aid digestion, and may reduce inflammation.';
                break;
            case 'lime':
                fav_fruit.innerHTML = 'Lime';
                benefits.innerHTML = 'Limes are high in vitamin C, which supports immune health and skin health. They also aid digestion and may help prevent kidney stones.';
                break;
            case 'mulberry':
                fav_fruit.innerHTML = 'Mulberry';
                benefits.innerHTML = 'Mulberries are rich in antioxidants, which may reduce inflammation and support heart health. They also contain vitamins C and K, promoting immune and bone health.';
                break;
            case 'papaya':
                fav_fruit.innerHTML = 'Papaya';
                benefits.innerHTML = 'Papayas are rich in vitamin C and papain, an enzyme that aids digestion. They also support immune health and may reduce inflammation.';
                break;
            case 'dragonfruit':
            case 'dragon fruit':
                fav_fruit.innerHTML = 'Dragon Fruit';
                benefits.innerHTML = 'Dragon fruit is high in antioxidants and vitamin C. It supports immune health, aids digestion, and may improve skin health.';
                break;
            case 'passion':
            case 'passion fruit':
            case 'passionfruit':
                fav_fruit.innerHTML = 'Passion Fruit';
                benefits.innerHTML = 'Passion fruit is rich in fiber, vitamin C, and antioxidants. It supports digestive health, boosts immunity, and may reduce inflammation.';
                break;
            case 'peach':
                fav_fruit.innerHTML = 'Peach';
                benefits.innerHTML = 'Peaches are high in vitamins A and C, which support skin health and immune function. They also contain antioxidants that may reduce inflammation.';
                break;
            case 'persimmon':
                fav_fruit.innerHTML = 'Persimmon';
                benefits.innerHTML = 'Persimmons are rich in vitamins A and C, which support eye health and immune function. They also contain antioxidants that may reduce inflammation.';
                break;
            case 'melon':
                fav_fruit.innerHTML = 'Melon';
                benefits.innerHTML = 'Melons are hydrating and rich in vitamins A and C. They support immune health, promote skin health, and may reduce inflammation.';
                break;
            case 'jamun':
            case 'black plum':
            case 'java plum':
                fav_fruit.innerHTML = 'Black Plum';
                benefits.innerHTML = 'Black plums are rich in antioxidants and fiber. They support digestive health, regulate blood sugar levels, and may reduce inflammation.';
                break;
            case 'jujube':
                fav_fruit.innerHTML = 'Jujube';
                benefits.innerHTML = 'Jujubes are high in vitamin C and antioxidants. They support immune health, improve digestion, and may reduce inflammation.';
                break;
            case 'quince':
                fav_fruit.innerHTML = 'Quince';
                benefits.innerHTML = 'Quinces are rich in fiber and vitamin C. They support digestive health, boost immunity, and may reduce inflammation.';
                break;
            case 'goji berry':
                fav_fruit.innerHTML = 'Goji Berry';
                benefits.innerHTML = 'Goji berries are packed with antioxidants and vitamins. They support immune health, improve eye health, and may reduce inflammation.';
                break;
            case 'mandarin':
                fav_fruit.innerHTML = 'Mandarin';
                benefits.innerHTML = 'Mandarins are rich in vitamin C, which supports immune health and skin health. They also contain antioxidants that may reduce inflammation.';
                break;
            case 'longan':
                fav_fruit.innerHTML = 'Longan';
                benefits.innerHTML = 'Longans are high in vitamin C and antioxidants. They support immune health, improve skin health, and may reduce inflammation.';
                break;
            case 'blackcurrant':
                fav_fruit.innerHTML = 'Blackcurrant';
                benefits.innerHTML = 'Blackcurrants are rich in vitamin C and antioxidants. They support immune health, improve heart health, and may reduce inflammation.';
                break;
            case 'tamarind':
                fav_fruit.innerHTML = 'Tamarind';
                benefits.innerHTML = 'Tamarind is high in antioxidants and fiber. It supports digestive health, boosts immunity, and may reduce inflammation.';
                break;
            case 'satsuma':
                fav_fruit.innerHTML = 'Satsuma';
                benefits.innerHTML = 'Satsumas are rich in vitamin C, which supports immune health and skin health. They also contain antioxidants that may reduce inflammation.';
                break;
            default:
                benefits.innerHTML = "<i>Oops! Your fruit is not in our database. Please check your spelling or try another fruit.</i>";
                document.getElementById('benefit').style.display = "none";
                break;
        }
    }
}