const inp1=document.querySelector('.input1')
const inp2=document.querySelector('.input2')
const block=document.querySelector('.fields')
const btn=document.querySelector('.btn')
class Messenger {
    constructor(name, time,text) {
      this.name = name;
      this.time = time;
      this.text = text;
    }
    send(name,text) {
      this.name = name;
      this.text=text;
    }
    show_history()
    {
    let now = new Date();
    this.time=`${now.getHours().toString()}:${ now.getMinutes().toString()}`;
    }
    toString(){
      return  `${this.time} ${this.name}:${this.text}`;
    }
    toHtml()
    {
        block.innerHTML+=`<p>${this.time} ${this.name}:${this.text}</ p></b>`;
    }
  } 
btn.addEventListener('click',()=>
{
let messenger = new Messenger() 
messenger.send(inp1.value,inp2.value);
messenger.show_history()
messenger.toHtml();
console.log(messenger.toString());
});

