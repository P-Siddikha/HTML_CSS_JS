document.querySelector("#push").onclick=function(){
    if (document.querySelector("#newtask input").value.length==0){
        alert("Please enter the task.");
    }
    else{
        document.querySelector("#tasks").innerHTML+=`
        <div id="task">
                <span class="eachtask">
                    ${document.querySelector("input").value}
                </span>
                <button class="but"><span class="fa fa-trash"></span></button>
        </div>`;
        document.querySelector("input").value="";
        var present_tasks=document.querySelectorAll(".but");
        console.log(typeof present_tasks);
        for(var i=0;i<present_tasks.length;i++){
            present_tasks[i].onclick=function(){
                this.parentNode.remove();
            };
        }

    }
}