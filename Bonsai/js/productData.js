/*
CHECKOUT OPTIONS
[0] = No Checkout Options
[1] = Bonsai Checkout Options
[2] = Soil Checkout Options
*/
const checkoutOptionsHTML = [
    {
        id: "noOptions",
        HTMLBlock: "",
    },
    {
        id: "bonsaiOptions",
        HTMLBlock: ' \
        <h5>Select Options:</h5> \
            <div class="form-group"> \
                <select name="options_1" id="options_1" class="form-control"> \
                <option>Select Additional Tools</option> \
                <option>"All In One" Basic Bonsai Tool Kit (+£95.00)</option> \
                <option>Carbon Steel Japanese Bonsai Tool kit (+£195.00)</option> \
                <option>Stainless Steel Bonsai Tool kit (+295.00)</option> \
                <option>None (+£0.00)</option> \
                </select> \
            </div> \
            <div class="form-group"> \
            <select name="options_2" id="options_2" class="form-control"> \
                <option>Select Outdoor Bonsai Soil Mix</option> \
                <option>2L (+£4.00)</option> \
                <option>5L (+£8.00)</option> \
                <option>10L (+£14.00)</option> \
                <option>None (+£0.00)</option> \
            </select> \
            </div> \
            <div class="form-group"> \
            <select name="options_3" id="options_3" class="form-control"> \
                <option>Select Bonsai Care Guide</option> \
                <option>Yes (+£13.00)</option> \
                <option>No (+£0.00)</option> \
            </select> \
            </div>'
    },
    {
        id: "soilOptions",
        HTMLBlock: ' \
        <h5>Select Options:</h5> \
                    <div class="form-group"> \
                      <select name="options_2" id="options_2" class="form-control"> \
                        <option>Size (Litres)</option> \
                        <option>1L (+£0.00)</option> \
                        <option>2L (+£4.00)</option> \
                        <option>5L (+£10.00)</option> \
                        <option>10L (+£20.00)</option> \
                      </select> \
                    </div>'
    }
];

/*PRODUCT DATA*/
const productData = [
    {
        id: "outdoorBonsai_1",
        productTitle: "Chinese Juniper Itagawa",
        productPrice: "£2,000.00",
        productDescription: "Spectacular Itoigawa Chinese Juniper Tree, approximately 35-39cm tall and in a ceramic bonsai pot.",
        productImage: "./img/OutdoorBonsai/OutdoorBonsai_1.jpg",
        productImageAlt: "Outdoor Bonsai 1",
        checkoutOptions: checkoutOptionsHTML[1].HTMLBlock,
    },
    {
        id: "outdoorBonsai_2",
        productTitle: "Chinese Juniper Itagawa",
        productPrice: "£1,495.00",
        productDescription: "Lovely Large Itoigawa Chinese Juniper Tree, approximately 98-100cm tall.",
        productImage: "./img/OutdoorBonsai/OutdoorBonsai_2.jpg",
        productImageAlt: "Outdoor Bonsai 2",
        checkoutOptions: checkoutOptionsHTML[1].HTMLBlock,
    },
    {
        id: "outdoorBonsai_3",
        productTitle: "Chinese Juniper Itagawa",
        productPrice: "£3,250.00",
        productDescription: "Beautiful Chinese Itiogawa Juniper, approximately 35-38cm tall and planted in an oval ceramic bonsai pot.",
        productImage: "./img/OutdoorBonsai/OutdoorBonsai_3.jpg",
        productImageAlt: "Outdoor Bonsai 3",
        checkoutOptions: checkoutOptionsHTML[1].HTMLBlock,
    },
    {
        id: "outdoorBonsai_4",
        productTitle: "Chinese Juniper Itagawa",
        productPrice: "£195.00",
        productDescription: "Lovely Chinese Juniper Itiogawa Bonsai Tree in a ceramic bonsai pot, approximately 27-29cm tall.",
        productImage: "./img/OutdoorBonsai/OutdoorBonsai_4.jpg",
        productImageAlt: "Outdoor Bonsai 4",
        checkoutOptions: checkoutOptionsHTML[1].HTMLBlock,
    },
    {
        id: "outdoorBonsai_5",
        productTitle: "Chinese Juniper Itagawa",
        productPrice: "£595.00",
        productDescription: "Gorgeous Chinese Juniper Itoigawa Bonsai Tree, approximately 28-33cm tall and planted in an unglazed oval ceramic bonsai pot.",
        productImage: "./img/OutdoorBonsai/OutdoorBonsai_5.jpg",
        productImageAlt: "Outdoor Bonsai 5",
        checkoutOptions: checkoutOptionsHTML[1].HTMLBlock,
    },
    {
        id: "outdoorBonsai_6",
        productTitle: "Semi Cascade Juniper Procumbens",
        productPrice: "£225.00",
        productDescription: "Lovely outdoor Juniperus procumbens Nana Bonsai Tree planted cascade style and in a lovely ceramic pot and stands approximately 37-39cm tall. This item needs to be collected from the nursery.",
        productImage: "./img/OutdoorBonsai/OutdoorBonsai_6.jpg",
        productImageAlt: "Outdoor Bonsai 6",
        checkoutOptions: checkoutOptionsHTML[1].HTMLBlock,
    },
    {
        id: "outdoorBonsai_7",
        productTitle: "Pyracantha Bonsai",
        productPrice: "£395.00",
        productDescription: "Beautiful Large Pyracantha Tree, approximately 56-60cm tall and planted in a plastic bosai pot.",
        productImage: "./img/OutdoorBonsai/OutdoorBonsai_7.jpg",
        productImageAlt: "Outdoor Bonsai 7",
        checkoutOptions: checkoutOptionsHTML[1].HTMLBlock,
    },
    {
        id: "outdoorBonsai_8",
        productTitle: "Japanese White Pine",
        productPrice: "£295.00",
        productDescription: "Black Pine Bonsai Tree. Approximately 36-38cm tall planted in a plastic bonsai pot.",
        productImage: "./img/OutdoorBonsai/OutdoorBonsai_8.jpg",
        productImageAlt: "Outdoor Bonsai 8",
        checkoutOptions: checkoutOptionsHTML[1].HTMLBlock,
    },
    {
        id: "outdoorBonsai_9",
        productTitle: "Punica Granatum (Pomegranate)",
        productPrice: "£79.00",
        productDescription: "Pomegranate Bonsai Tree, approximately 25-30cm tall and planted in a ceramic pot. Around 8 years old.",
        productImage: "./img/OutdoorBonsai/OutdoorBonsai_9.jpg",
        productImageAlt: "Outdoor Bonsai 9",
        checkoutOptions: checkoutOptionsHTML[1].HTMLBlock,
    },
    {
        id: "indoorBonsai_1",
        productTitle: "Ficus Bonsai with Amazing Arial Roots",
        productPrice: "£1,200.00",
        productDescription: "Gorgeous Ficus Bonsai Tree, standing approximately 50-53cm tall with amazing aerial roots, looks incredible from all angles. Comes in a Ceramic Bonsai Pot.",
        productImage: "./img/IndoorBonsai/IndoorBonsai_1.jpg",
        productImageAlt: "Indoor Bonsai 1",
        checkoutOptions: checkoutOptionsHTML[1].HTMLBlock,
    },
    {
        id: "indoorBonsai_2",
        productTitle: "Exposed Root Elm Forest Landscape",
        productPrice: "£415.00",
        productDescription: "This a delightful landscape made with Chinese Elms with exposed roots and planted in a Mica Pot. Stands approximately 35-45cm tall.",
        productImage: "./img/IndoorBonsai/IndoorBonsai_2.jpg",
        productImageAlt: "Indoor Bonsai 2",
        checkoutOptions: checkoutOptionsHTML[1].HTMLBlock,
    },
    {
        id: "indoorBonsai_3",
        productTitle: "Ficus Bonsai with Amazing Arial Roots",
        productPrice: "£1,200.00",
        productDescription: "This is a truly magnificent Ficus Bonsai Tree, standing approximately 53-57cm tall with amazing aerial roots, looks incredible from all angles. Comes in a Ceramic Bonsai Pot.",
        productImage: "./img/IndoorBonsai/IndoorBonsai_3.jpg",
        productImageAlt: "Indoor Bonsai 3",
        checkoutOptions: checkoutOptionsHTML[1].HTMLBlock,
    },
    {
        id: "indoorBonsai_4",
        productTitle: "Syzygium (Brush Cherry) Bonsai",
        productPrice: "£149.00",
        productDescription: "Beautiful S-Shaped Syzygium (Brush Cherry) Bonsai Tree, in an oval ceramic Bonsai pot and approximately 50-52cm tall.",
        productImage: "./img/IndoorBonsai/IndoorBonsai_4.jpg",
        productImageAlt: "Indoor Bonsai 4",
        checkoutOptions: checkoutOptionsHTML[1].HTMLBlock,
    },
    {
        id: "indoorBonsai_5",
        productTitle: "Podocarpus Bonsai in an Unglazed Pot",
        productPrice: "£59.00",
        productDescription: "Podocarpus Bonsai Tree, also known as the Buddhist Pine. Approximately 27-29cm tall, easy to care for, prefer a cool room, and displayed in a ceramic Bonsai pot.",
        productImage: "./img/IndoorBonsai/IndoorBonsai_5.jpg",
        productImageAlt: "Indoor Bonsai 5",
        checkoutOptions: checkoutOptionsHTML[1].HTMLBlock,
    },
    {
        id: "indoorBonsai_6",
        productTitle: "Syzygium (Brush Cherry) Bonsai",
        productPrice: "£169.00",
        productDescription: "Beautiful S-Shaped Syzygium (Brush Cherry) Bonsai Tree, in an unglazed ceramic bonsai pot, approximately 50-53cm tall.",
        productImage: "./img/IndoorBonsai/IndoorBonsai_6.jpg",
        productImageAlt: "Indoor Bonsai 6",
        checkoutOptions: checkoutOptionsHTML[1].HTMLBlock,
    },
    {
        id: "indoorBonsai_7",
        productTitle: "Ulmus parvifolia Chinese Elm",
        productPrice: "£295.00",
        productDescription: "Ulmus parvifolia ‘Chinese Elm’ (deciduous) Bonsai, approximately 54-56cm tall. Complete in a Ceramic Bonsai Pot. Easy to care for so a lovely tree for a beginner. This tree would thrive outdoors, if indoors would require lots of light.",
        productImage: "./img/IndoorBonsai/IndoorBonsai_7.jpg",
        productImageAlt: "Indoor Bonsai 7",
        checkoutOptions: checkoutOptionsHTML[1].HTMLBlock,
    },
    {
        id: "indoorBonsai_8",
        productTitle: "Ulmus parvifolia Chinese Elm",
        productPrice: "£189.00",
        productDescription: "Ulmus parvifolia ‘Chinese Elm’ (deciduous) Bonsai, between 50-56cm tall. Complete in a ceramic bonsai pot. This would thrive outdoors, if kept indoors would require lots of light.",
        productImage: "./img/IndoorBonsai/IndoorBonsai_8.jpg",
        productImageAlt: "Indoor Bonsai 8",
        checkoutOptions: checkoutOptionsHTML[1].HTMLBlock,
    },
    {
        id: "indoorBonsai_9",
        productTitle: "Ulmus parvifolia Chinese Elm",
        productPrice: "£99.00",
        productDescription: "Ulmus parvifolia ‘Chinese Elm’ (deciduous) Bonsai, between 45-52cm tall. Complete in a ceramic bonsai pot. Easy to care for so a lovely tree for a beginner.",
        productImage: "./img/IndoorBonsai/IndoorBonsai_9.jpg",
        productImageAlt: "Indoor Bonsai 9",
        checkoutOptions: checkoutOptionsHTML[1].HTMLBlock,
    },
    {
        id: "bonsaiCare_1",
        productTitle: "Stainless Steel Bonsai Tool kit",
        productPrice: "£295.00",
        productDescription: "High quality 7 Piece Stainless Steel Dingmu Bonsai Tool kit. An ideal gift for someone who wants to learn a bit more about bonsai.",
        productImage: "./img/Care/BonsaiCare_1.jpg",
        productImageAlt: "Bonsai Care 1",
        checkoutOptions: checkoutOptionsHTML[0].HTMLBlock,
    },
    {
        id: "bonsaiCare_2",
        productTitle: "Tool Bag",
        productPrice: "£25.00",
        productDescription: "A treat for you bonsai tools. Lovely high quality leather effect tool bag made by Ryuga and has space for 9 tools.",
        productImage: "./img/Care/BonsaiCare_2.jpg",
        productImageAlt: "Bonsai Care 2",
        checkoutOptions: checkoutOptionsHTML[0].HTMLBlock,
    },
    {
        id: "bonsaiCare_3",
        productTitle: "Bonsai Trimming or Twig Shears 200mm",
        productPrice: "£59.00",
        productDescription: "Bonsai Root Shears 200mm from Dingmu.",
        productImage: "./img/Care/BonsaiCare_3.jpg",
        productImageAlt: "Bonsai Care 3",
        checkoutOptions: checkoutOptionsHTML[0].HTMLBlock,
    },
    {
        id: "bonsaiCare_4",
        productTitle: "Stainless Steel Bonsai Root Rake",
        productPrice: "£12.00",
        productDescription: "Premium Stainless Steel Chinese Bonsai Root Rake.",
        productImage: "./img/Care/BonsaiCare_4.jpg",
        productImageAlt: "Bonsai Care 4",
        checkoutOptions: checkoutOptionsHTML[0].HTMLBlock,
    },
    {
        id: "bonsaiCare_5",
        productTitle: "Flat Iron Bonsai Tree Jin Cleaning Brush 230mm",
        productPrice: "£15.00",
        productDescription: "This iron bristle brush is ideal for cleaning delicate deadwood and bark where a softer brush won’t do. A must have for your bonsai kit.",
        productImage: "./img/Care/BonsaiCare_5.jpg",
        productImageAlt: "Bonsai Care 5",
        checkoutOptions: checkoutOptionsHTML[0].HTMLBlock,
    },
    {
        id: "bonsaiCare_6",
        productTitle: "Bonsai Pot Mesh",
        productPrice: "£5.00",
        productDescription: "2 x A4 sized Sheets Of High Quality Bonsai Pot Mesh so you can cut to the size you require.",
        productImage: "./img/Care/BonsaiCare_6.jpg",
        productImageAlt: "Bonsai Care 6",
        checkoutOptions: checkoutOptionsHTML[0].HTMLBlock,
    },
    {
        id: "bonsaiCare_7",
        productTitle: "Naruko Slow Release Bonsai Food",
        productPrice: "£5.00",
        productDescription: "Granular Naruko fertilizer is a granular slow release feed that has a rapid uptake by bonsai trees The bonsai feed is shaped so it has limited roll off from the soil.",
        productImage: "./img/Care/BonsaiCare_7.jpg",
        productImageAlt: "Bonsai Care 7",
        checkoutOptions: checkoutOptionsHTML[0].HTMLBlock,
    },
    {
        id: "bonsaiCare_8",
        productTitle: "Ultra Fine Shohin Akadama Bonsai Soil",
        productPrice: "£4.00",
        productDescription: "Shohin Akadama Bonsai Soil",
        productImage: "./img/Care/BonsaiCare_8.jpg",
        productImageAlt: "Bonsai Care 8",
        checkoutOptions: checkoutOptionsHTML[2].HTMLBlock,
    },
    {
        id: "bonsaiCare_9",
        productTitle: "Bonsai Cut Paste",
        productPrice: "£19.00",
        productDescription: "160g Japanese Bonsai Cut Paste particularly good for use on evergreen species.",
        productImage: "./img/Care/BonsaiCare_9.jpg",
        productImageAlt: "Bonsai Care 9",
        checkoutOptions: checkoutOptionsHTML[0].HTMLBlock,
    },
];


/*GET PRODUCT PAGE DATA*/
const getUrlId = window.location.search;
const UrlId = getUrlId.split('=')[1];

let fillProductPageHTML = () => {
    document.getElementById("productTitle").innerText = productData[a].productTitle;
    document.getElementById("productPrice").innerText = productData[a].productPrice;
    document.getElementById("productDescription").innerText = productData[a].productDescription;
    document.getElementById("productImage").src = productData[a].productImage;
    document.getElementById("productImage").alt = productData[a].productImageAlt;
    document.getElementById("productOptions").innerHTML = productData[a].checkoutOptions;
};

for (var a = 0; a < productData.length; a++) {
    if (productData[a].id === UrlId) {
        fillProductPageHTML();
        break;
    }
};

/*STORE PAGE DATA*/

const storePageData = [
    {
        storePageTitle: "Outdoor Bonsai Trees",
        storePageDescription: "As outdoor bonsai grow faster than indoor bonsai, you will see the results of reshaping, wiring and pruning much sooner. Outdoor bonsai also offer more scope for practising the hobby. Some enthusiasts make their own bonsai from garden and nursery plants, and some collect the raw material from the wild. You can also propagate your own plants from seed or cuttings or by layering. \
        <br> \
        <br> \
        Outdoor bonsai can be taken indoors from time to time. In fact, in countries such as China and Japan, it is traditional to use bonsai to decorate the home, but the trees are kept indoors for only short periods. After a day or two they are returned to their outdoor positions. The choice of outdoor bonsai is much wider than of indoor species."
    },
    {
        storePageTitle: "Indoor Bonsai Trees",
        storePageDescription: "Indoor bonsai have become extremely popular in recent years. They make excellent gifts because they are different and say something about you. Most of them are tropical or semi-tropical species. They usually require lots of light and fairly constant temperature and humidity. The secret is not to forget to water them!"
    },
    {
        storePageTitle: "Bonsai Care",
        storePageDescription: "We stock a very comprehensive range of bonsai tools, soils and sundries. Our range of tools include the high quality Japanese tools, and the cheaper budget tools from China. Soils and growing medium include our own special bonsai mix, and all the Japanese ones such as Akadama, Kanuma, Huega etc. \
        <br> \
        <br> \
        If you want the very best tools, then the Japanese branded ones are the thing for you. If you are not that fussy about brand names and just want the basic tools that do the job, then the Chinese tools are perfectly adequate. Our online shop shows most of the tools we stock, but if you need a special tool or one in a very large size, please contact us direct. We usually have it in stock."
    },
];

const outdoorBonsaiProducts = [
    "outdoorBonsai_1",
    "outdoorBonsai_2",
    "outdoorBonsai_3",
    "outdoorBonsai_4",
    "outdoorBonsai_5",
    "outdoorBonsai_6",
    "outdoorBonsai_7",
    "outdoorBonsai_8",
    "outdoorBonsai_9",
];
const indoorBonsaiProducts = [
    "indoorBonsai_1",
    "indoorBonsai_2",
    "indoorBonsai_3",
    "indoorBonsai_4",
    "indoorBonsai_5",
    "indoorBonsai_6",
    "indoorBonsai_7",
    "indoorBonsai_8",
    "indoorBonsai_9",
];
const bonsaiCareProducts = [
    "bonsaiCare_1",
    "bonsaiCare_2",
    "bonsaiCare_3",
    "bonsaiCare_4",
    "bonsaiCare_5",
    "bonsaiCare_6",
    "bonsaiCare_7",
    "bonsaiCare_8",
    "bonsaiCare_9",
];

/*GET STORE PAGE PRODUCT DATA*/

fillStorePageProductData = () =>  {
    const productCard = ' \
              <a href="./productPage.html?id='+productData[a].id+'" class="stretched-link"><img class="card-img-top" src='+productData[a].productImage+' alt='+productData[a].productImageAlt+'></a> \
              <div class="img-centered-text">More Info</div> \
              <div class="card-body"> \
                <p class="card-text">'+productData[a].productTitle+'<br>'+productData[a].productPrice+'</p> \
              </div>';
    const parent = document.getElementById("productCards");
    let newProductCard = document.createElement('div');
    newProductCard.innerHTML = productCard;
    newProductCard.className =  "card sm-4 productCard mx-auto d-flex";
    parent.appendChild(newProductCard);
};

let fillStorePageHTML = () => {
    document.getElementById("storePageTabTitle").innerText = storePageData[store].storePageTitle;
    document.getElementById("storePageTitle").innerText = storePageData[store].storePageTitle;
    document.getElementById("storePageDescription").innerText = storePageData[store].storePageDescription;
};


storePage = eval(UrlId);

if (storePage === outdoorBonsaiProducts)    {
    store = 0;
}else if (storePage === indoorBonsaiProducts) {
    store = 1;
}else if (storePage === bonsaiCareProducts) {
    store = 2;
}
fillStorePageHTML();

for (var b = 0; b < storePage.length; b++) {
    for (var a = 0; a < productData.length; a++) {
        if (storePage[b] === productData[a].id) {
            fillStorePageProductData();
        }
    }
};
