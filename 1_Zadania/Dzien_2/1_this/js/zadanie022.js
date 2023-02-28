var calculator = {
    save: function(newA,newB) {
        this.a = newA;
        this.b = newB;
    },
      sum : function() {
       this.c = this.a + this.b;
          return this.c;
      },
     multiply : function() {
        this.d = this.a * this.b;
        return this.d;
     }

};
  
calculator.save(2,3);
console.log( calculator.sum() );
console.log( calculator.multiply() );
