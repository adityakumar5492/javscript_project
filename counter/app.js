let count = 0; // variable named count
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn"); // It returns a NodeList (similar to an array).
// btns =[ Decrease Button,Reset Button,Increase Button]

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const styles = e.currentTarget.classList;

        if(styles.contains("decrease")){
            count--;
        }else if(styles.contains("increase")){
            count++;
        }else{
            count = 0;
        }

        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count == 0){
            value.style.color = "#222";
        }
        value.textContent = count;
    })
})
