var images=['https://www.pewresearch.org/wp-content/uploads/2019/09/FT_19.09.24_BookReading_feature.jpg','https://www.dawsoncollege.qc.ca/news/wp-content/uploads/sites/130/image1.jpeg','https://www.intoalbania.com/wp-content/uploads/2020/07/maxresdefault.jpg','https://s3.amazonaws.com/stockfreedom/wp-content/uploads/2018/01/23170338/sf01102640sm.jpg']

var index=0;
var image=document.getElementById('image');
image.style='height:600px;width:100%'
image.src=images[index]

function slideShow(){
    index++
    if(index > images.length - 1){
        index=0
    }
    image.src=images[index]
}   

setInterval(slideShow,3000);

var books=[
    {
        imageBook: 'https://mvinfo.hr/_mvshop/public/data/image/2/10738.jpg',
        writerBook: 'Gabriela Garcíe Márqueza ',
        nameBook: 'Sto Godina samoće',
        priceBook: '100',
        description: 'Najpoznatiji roman nobelovca Gabriela Garcíe Márqueza objavljen je 1967. i do sada preveden na gotovo 30 svjetskih jezika, prodan u milijunima primjeraka diljem svijeta i postao je jedno od najvažnijih djela svjetske književnosti. Riječ je o djelu kolumbijske književnosti koje prati nekoliko generacija obitelji Buendia u izmišljenom gradiću Macondo koji su osnovali José Arcadio Buendía i njegova žena Ursula Iguarán u potrazi za boljim životom. Upravo lik Ursule povezuje brojne generacije obitelji. Naime, ona umire u visokoj dobi (između 114. i 122 godine) pa svjedoči svim usponima i padovima obitelji. Ono što ovo djelo izdvaja od sličnih obiteljskih saga jest magijski realizam, jedna od meni najdražih pojava u književnosti koju su južnoamerički književnici maestralno uklopili u svoja djela. Riječ je o tehnici kojom se isprepliću san i java, realno i irealno i gdje ne postoji jasna granica između toga. Cijeli je koncept ove priče zamišljen kao kritika kolumbijske povijesti kroz priču jedne nesretne obitelji, prožeta metaforom na svim razinama.'
    }, 
    {
        imageBook: 'https://prodimage.images-bn.com/pimages/9798589249866_p0_v1_s550x406.jpg',
        writerBook: 'Lav Nikolajevič Tolstoj ',
        nameBook: 'Ana Karenjina',
        priceBook: '90',
        description: 'Nezaobilazna Ana Karenjina jedno je od meni najdražih književnih djela svih vremena. Veliki Tolstoj u njoj daje prikaz ruskog društva sedamdesetih godina 19. stoljeća kroz slike ljubavi kao temeljnog pokretača ljudskih života i to kroz tri različita braka i jednu izvanbračnu vezu. Također detaljno raspravlja o religiji, položaju ruskog seljaka u društvu i traženju smisla života, a sve to kroz lik Levina kao protutežu Ani. Slojevitost ovog djela potvrđuje i to što ga je žanrovski teško definirati kao jednu vrstu romana jer se u njemu isprepleću elementi filozofskog, psihološkog, ljubavnog i društvenog romana te romana karaktera. Kroz ovu žanrovsku isprepletanost Tolstoj je  uspio stvoriti likove koji kao da su zaista od krvi i mesa, koji svi redom u sebi imaju i dobre i loše osobine, potpuno suprotno postupcima karakterizacije likova u ranijim književnim epohama, što mi je bilo pravo osvježenje nakon dotadašnjih idealiziranih likova. Jer, na koncu, idealne osobe ne postoje.'
    },
    {
        imageBook: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532739266l/40963665._SY475_.jpg',
        writerBook: 'Albert Camus ',
        nameBook: 'Stranac',
        priceBook: '40',
        description: 'Zagonetni mladić koji ne pokazuje osjećaje ni na majčinom pogrebu, ne mari za ljubav ni karijeru i postaje slučajni ubojica bez ikakvog motiva, a samo zato jer smatra da ionako ne može utjecati na svoj život, temelj je jednog od najvažnijih romana 20. stoljeća, Camuseva Stranca. Protagonist Mersault nam kronološki iznosi događanja u svom životu, a pripovjedač se pritom vodi idejom apsurda, odakle je i nastao pojam filozofije apsurda kojeg je Camus kasnije nijekao. Kako smatra da nema smisla ulagati u odnose s ljudima, jer čovjek ionako na kraju umire sam, potpuni je stranac svima oko sebe iako njegova okolina uvijek nastoji doprijeti do njega, no ponajviše je stranac sebi samome. Sukobljava se s cijelim svijetom, odbacuje ljubav, religiju, karijeru pa i samu slobodu, što je u skladu s velikim promjenama koje su zadesile 20.stoljeće. Iako lik Mersaulta još i danas zbunjuje kako književne teoretičare, tako i psihologe, vjerujem da nam otvara nove vidike i navodi nas da dobro promislimo o tome kako ćemo proživjeti one godine koje su nam preostale.'
    },
    {
        imageBook: 'https://img.wattpad.com/cover/82258743-288-k767267.jpg',
        writerBook: 'Fjodor M.Dostojevski ',
        nameBook: 'Zločin i kazna',
        priceBook: '70',
        description: 'Dostojevski je bio iznimno cijenjen kao autor još tijekom svog života, čemu je u mnogome pridonijela njegova supruga Ana, a nakon smrti njegova su djela postala jednima od najboljih klasika svih vremena. Mnogima je najpoznatiji i najdraži njegov kultni realističko-modernistički roman Zločin i kazna u kojem kroz lik mladića Raskoljnikova progovara o problemima zločina i kazne, grijeha i traženja pravde, ispaštanju siromašnih, osiromašenom plemstvu i mračnoj petrogradskoj stvarnosti onog doba. Roman počinje Raskoljnikovim ubojstvom stare lihvarice, čijim je novcem on namjeravao pomoći svima onima koji ga nemaju – Marmeladovima, svojoj obitelji i sebi, a ostatak romana zamišljen je kao, prije svega, roman ideje čemu su podređeni i likovi i fabula, dok je elementima unutarnjih monologa Dostojevski već zakoračio u epohu modernizma.'
    },
    {
        imageBook:'https://www.knjiga.ba/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/slike/alkemicar.jpg',
        writerBook: 'Paulo Coelho',
        nameBook: 'Alkemičar',
        priceBook: '60',
        description: 'Alkemičar, očaravajući roman Paula Coelha nadahnuo je milijune ljudi širom svijeta. Ova divna priča, istovremeno jednostavna i prepuna životnih poruka i mudrosti, govori o mladom andaluzijskom pastiru Santiagu koji iz svojega doma u Španjolskoj odlazi u egipatsku pustinju u potrazi za blagom skrivenim u piramidama. Putem, on sreće Ciganku, čovjeka koji sebe naziva kraljem i alkemičara, a oni ga upućuju kojim smjerom treba krenuti u potragu. Putovanje koje počinje kao potraga za svjetovnim dobrima tako se pretvara u otkrivanje unutarnjeg blaga. Ova dragocjena i poticajna priča o mladiću Santiagu svjedoči o tome koliko je važno slušati svoje srce i vjerovati u snove jer oni mogu preobraziti naš život.'
    },
    {
        imageBook: 'https://mozaik-knjiga.hr/wp-content/uploads/archive/images/Mali_princ_web.jpg',
        writerBook: 'A. de Saint Exupéry',
        nameBook: 'Mali princ',
        priceBook: '80',
        description: 'Ne poznajem nijednu osobu koja voli čitati, a da ne obožava Malog princa. To je knjiga koja savršeno spaja djecu i odrasle, odnosno koja briše granicu između dječje književnosti i književnosti za odrasle. Riječ je o djelu tzv. fantastične književnosti koje gradi irealan svijet na podlozi realnog svijeta, a sve to umotano u priču o susretu avijatičara i zlatokosog dječaka u bespućima pustinje. Knjiga nastala davne 1943. godine i danas je vrlo aktualna kroz svoju kritiku društva i upozoravanje na prave životne vrijednosti, a upravo je to ono što potiče odrasle na čitanje ovog bezvremenskog djela. Gotovo svaka rečenica koju mali princ izgovara u knjizi postala je kultna, a njegove poruke o djetinjstvu, odnosima s ljudima i svim onim sitnicama koje zaista vrijede truda ne mogu biti istinitije.'
    }
];
displayBooks(books)

var cart=[];
var numbercart=document.querySelector('.number-cart')
//ADMIN
var adminFormCont= document.getElementById('admin');
var wrapper = document.getElementById('wrapper');

function adminPanel(){
    adminFormCont.classList.remove('none');
   wrapper.classList.add('none')
}


function addBookByAdmin(){
    var adminFormCont= document.getElementById('admin');
    var wrapper = document.getElementById('wrapper');
    var admin={
        imageBook: document.getElementById('img-form').value,
        writerBook:document.getElementById('autor-form').value,
        nameBook: document.getElementById('title-form').value,
        priceBook: document.getElementById('price-form').value,
        description:document.getElementById('book-desc').value
    }
   books.push(admin);
   displayBooks(books)
   console.log(admin.nameBook);

   adminFormCont.classList.add('none');
   wrapper.classList.remove('none')
}

function getValue(id){
    return document.getElementById(id).value;
}
// Prikaz knjiga
function displayBooks(p_books){
  var wrapper = document.getElementById('wrapper');
  wrapper.innerHTML='';
  for(var i=0;i< p_books.length;i++){
      var index= p_books[i];
      var card = document.createElement('div');
      card.id='card'
      var imageBook=document.createElement('img');
      imageBook.src=index.imageBook;
      var nameBook=document.createElement('h2');
      nameBook.innerHTML=index.nameBook;
      var writerBook=document.createElement('h4');
      writerBook.innerHTML=index.writerBook;
      var priceBook=document.createElement('p');
      priceBook.innerHTML=index.priceBook + ' KM';
      var buyBtn=document.createElement('button');
      buyBtn.innerHTML='Buy';
      buyBtn.id=i;
      buyBtn.addEventListener('click',function(evt){
        var chack = confirm('Potvrdite kupovinu!!!');
        if(chack){
            cart.push(p_books[evt.target.id])
            books.splice(evt.target.id,1)
            numbercart.innerHTML=cart.length
            displayBooks(books)
        }
      })
      detailBtn=document.createElement('button');
      detailBtn.innerHTML='Detail';
      detailBtn.id=i;
      detailBtn.addEventListener('click',function(event){
          var index=event.target.id
          var model=document.createElement('div');
          model.className='model'
          console.log(event.target);
          var close=document.createElement('i');
          close.className='fas fa-times close';
          var imgModel=document.createElement('img');
          imgModel.src=p_books[index].imageBook
          var descriptionBook=document.createElement('p');
          descriptionBook.innerHTML=p_books[index].description
          console.log(descriptionBook);
          close.addEventListener('click', function(){
         model.classList.add('none')
        })
        
        model.appendChild(close);
        model.appendChild(imgModel);
        model.appendChild(descriptionBook);
        wrapper.appendChild(model);
    })

    
    card.appendChild(imageBook);
    card.appendChild(nameBook);
    card.appendChild(writerBook);
    card.appendChild(priceBook);
    card.appendChild(buyBtn);
    card.appendChild(detailBtn);
    wrapper.appendChild(card);

  }
}
displayBooks(books)

//SEARCH_BOX

function searchBook(evt){
    var filtredBook=[];
    for(var book of books){
       
        if(book.writerBook.toLowerCase().indexOf(evt.target.value.toLowerCase()) > -1){
           filtredBook.push(book)
        }
        displayBooks(filtredBook);
    }
}


// Prikaz  soping kartice
function shoppingCatr(){
    displayBooks(cart)
  //  console.log(cart);
    var wrapper = document.getElementById('wrapper');
    wrapper.innerHTML='';
    for(var i=0;i<cart.length;i++){
        var index=cart[i];
        var card = document.createElement('div');
        card.id='card'
        var imageBook=document.createElement('img');
        imageBook.src=index.imageBook;
        var nameBook=document.createElement('h2');
        nameBook.innerHTML=index.nameBook;
        var writerBook=document.createElement('h4');
        writerBook.innerHTML=index.writerBook;
        var priceBook=document.createElement('p');
        priceBook.innerHTML=index.priceBook + ' KM';
        var buyBtn=document.createElement('button');
        buyBtn.innerHTML='Buy';
        buyBtn.id=i;
        buyBtn.addEventListener('click',function(evt){
          var chack = confirm('Potvrdite kupovinu!!!');
          if(chack){
              cart.push(p_books[evt.target.id])
              books.splice(evt.target.id,1)
              numbercart.innerHTML=cart.length
              displayBooks(books)
          }
        })
        delateBtn=document.createElement('button');
        delateBtn.innerHTML='Delate';
        delateBtn.style='background-color: #E52A2A'
        delateBtn.id=i;
        delateBtn.onclick=function(evt){
          var index=evt.target.id;
          cart.splice(index,1)
          numbercart.innerHTML=cart.length
          shoppingCatr()
        }
      
        card.appendChild(imageBook);
        card.appendChild(nameBook);
        card.appendChild(writerBook);
        card.appendChild(priceBook);
        card.appendChild(buyBtn);
        card.appendChild(delateBtn);
        wrapper.appendChild(card);
    }
}


//LOG IN
var page=document.getElementById('page');
var loginPage=document.getElementById('login-page');
var singupPage=document.getElementById('singup-page')
var users=[];



function login(){
    var user={
        firstName:document.getElementById('firstnamesingup').value,
        lastName:document.getElementById('lastnamesingup').value,
        username:document.getElementById('usernamesingup').value,
        mail:document.getElementById('emailsingup').value,
        password: document.getElementById('pswsingup').value
    }
    var email= document.getElementById('email');
    var psw=document.getElementById('psw')
    var error=document.querySelector('.error')
  
   if((email.value===user.mail || email.value===user.username)&&(psw.value===user.password)){
       loginPage.classList.add('none');
       page.classList.remove('none');
       error.classList.add('none')
   }else{
    error.classList.remove('none');
    error.innerHTML='Pogresan unos!! Pokušajte ponovno!!!'
   }

}

//SING UP
function singup(){
    loginPage.classList.add('none');
    page.classList.add('none');
    singupPage.classList.remove('none')
}
    var error1=document.querySelector('.error1')
function singupSave(){
    var user={
        firstName:document.getElementById('firstnamesingup').value,
        lastName:document.getElementById('lastnamesingup').value,
        username:document.getElementById('usernamesingup').value,
        mail:document.getElementById('emailsingup').value,
        password: document.getElementById('pswsingup').value
    }
    users.push(user)
   // console.log(users);
   
    for(var user of users){
        if(user.firstName!=='' && user.lastName!==''&& user.username !== '' && user.mail !== '' && user.password !== ''){
            singupPage.classList.add('none');
            loginPage.classList.remove('none');
            error1.classList.add('none');
        }else{
            singupPage.classList.remove('none');
            loginPage.classList.add('none');
            error1.classList.remove('none');
            error1.innerHTML= 'Niste popunili sva polja pokusajte ponovno !!!'
        }
    }
}

//SINGOUT
function singout(){
    page.classList.add('none');
    loginPage.classList.remove('none')
}

//Back to page- kada je korpa prazna

function backToPage(){
    displayBooks(books)
}