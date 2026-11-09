// EDIT YOUR STORE SETTINGS HERE.
// Assumption: the supplied Indian mobile number uses country code 91.
const STORE = {
  whatsappNumber: '919326000197', // digits only, country code included
  instagram: 'lestryofficial',
  currency: 'INR'
};

// EDIT PRODUCTS HERE. Replace image paths with your own files in images/.
// Leave price as null until you have confirmed prices.
// Add your actual available colors to the colors array.
const PRODUCTS = [
  { id: 'LESTRY-001', name: 'Oversized Tee — Essential', subtitle: 'Everyday relaxed fit', image: '', price: null, sizes: ['S','M','L','XL','XXL'], colors: [], tag: 'ESSENTIAL' },
  { id: 'LESTRY-002', name: 'Oversized Tee — Graphic', subtitle: 'Statement streetwear', image: '', price: null, sizes: ['S','M','L','XL','XXL'], colors: [], tag: 'FEATURED' },
  { id: 'LESTRY-003', name: 'Oversized Tee — Signature', subtitle: 'Made for everyday expression', image: '', price: null, sizes: ['S','M','L','XL','XXL'], colors: [], tag: 'COLLECTION' }
];
function waLink(message){return `https://wa.me/${STORE.whatsappNumber}?text=${encodeURIComponent(message)}`;}
const genericMessage = 'Hi LESTRY! I would like to know more about your collection.';
['headerWhatsapp','contactWhatsapp','footerWhatsapp'].forEach(id=>{const a=document.getElementById(id);if(a)a.href=waLink(genericMessage)});
document.getElementById('year').textContent=new Date().getFullYear();
const grid=document.getElementById('productGrid');
PRODUCTS.forEach((product,index)=>{
  const card=document.createElement('article');card.className='product-card';
  const visual=document.createElement('div');visual.className='product-visual';
  if(product.image){const img=document.createElement('img');img.src=product.image;img.alt=product.name;img.loading='lazy';visual.appendChild(img)}
  else {const ph=document.createElement('span');ph.className='product-placeholder';ph.textContent='L.';visual.appendChild(ph)}
  const tag=document.createElement('span');tag.className='product-tag';tag.textContent=product.tag;visual.appendChild(tag);
  const info=document.createElement('div');info.className='product-info';
  const name=document.createElement('h3');name.textContent=product.name;
  const sub=document.createElement('p');sub.textContent=product.subtitle+(product.price!=null?' · ₹'+Number(product.price).toLocaleString('en-IN'):' · Price on request');
  const options=document.createElement('div');options.className='product-options';
  const sizeLabel=document.createElement('label');sizeLabel.textContent='Size';const size=document.createElement('select');size.setAttribute('aria-label','Size for '+product.name);
  product.sizes.forEach(s=>{const opt=document.createElement('option');opt.value=s;opt.textContent=s;size.appendChild(opt)});sizeLabel.appendChild(size);options.appendChild(sizeLabel);
  const colorLabel=document.createElement('label');colorLabel.textContent='Color';const color=document.createElement('select');color.setAttribute('aria-label','Color for '+product.name);
  const colors=product.colors.length?product.colors:['Ask on WhatsApp'];colors.forEach(c=>{const opt=document.createElement('option');opt.value=c;opt.textContent=c;color.appendChild(opt)});colorLabel.appendChild(color);options.appendChild(colorLabel);
  const button=document.createElement('button');button.className='order-btn';button.type='button';button.textContent='ORDER ON WHATSAPP ↗';
  button.addEventListener('click',()=>{const msg=`Hi LESTRY! I am interested in ordering:\nProduct: ${product.name}\nCode: ${product.id}\nSize: ${size.value}\nColor: ${color.value}\n${product.price!=null?'Listed price: ₹'+product.price:'Please share the price and available colors.'}`;window.open(waLink(msg),'_blank','noopener,noreferrer')});
  info.append(name,sub,options,button);card.append(visual,info);grid.appendChild(card);
});
