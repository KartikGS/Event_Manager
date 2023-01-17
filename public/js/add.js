console.log(document.getElementById('add'))
var btn=document.getElementById('add');
var crl=document.getElementById('new');
var src;
var loadFile=function(event){
  src=URL.createObjectURL(event.target.files[0]);
};

if(src != null && crl != null){
    crl.children.item(0).setAttribute('src',src)
}