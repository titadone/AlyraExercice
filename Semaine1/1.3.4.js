class CourbeElliptique{

    constructor(x,y){
        this.a = x
        this.b = y
        if(4*this.a**3+27*this.b**2 == 0 ){
            console.log("Attention ce n'est pas une courbe elliptique")
        }else{
            console.log("C'est une courbe elliptique")
        }
    }

    function equalCourbe(courbe){
        
    }


}

let courbe = new CourbeElliptique(4,20)