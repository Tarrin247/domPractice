document.addEventListener("DOMContentLoaded", function (){
    let paragraph = document.createElement('p');
    let text = document.createTextNode('Hello, Cohort 15 friends! What do you guys think about DOM?');
    
    paragraph.style.color = "blue";
    paragraph.style.textTransform = "uppercase";
    paragraph.className = "some-parapgraph";
    
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);
    
    let button = document.createElement('button');
    let btnText = document.createTextNode('Press here for answer:');
    button.appendChild(btnText);
    document.body.appendChild(button);

    button.addEventListener('click', function(){
        let h1 = document.createElement('h1');
        let h1Text = document.createTextNode("Dom is Gross!");
        h1.appendChild(h1Text);
        document.body.appendChild(h1);    
    })
}) 

