// business logic
var price , crust_price, topping_price ;
let total = 0;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}

//user interface logic
// proceed button
$(document).ready(function(){
  // $("button.proceed").click(function(){
  //   $("button.proceed").hide();
  //   $("#information").hide();
  //   $("div.choice").slideDown(1000);
  // });
  $("button.proceed").click(function(event){
   let pname = $(".name option:selected").val();
   let psize = $("#size option:selected").val();
   let pcrust = $("#crust option:selected").val();
   let ptopping = [];
   $.each($("input[name='toppings']:checked"), function(){            
       ptopping.push($(this).val());
   });
   console.log(ptopping.join(", "));

   switch(psize){
    case "0":
      price =0;
    break;
    case "large":
       price = 1200;
       console.log(price);
     break;
     case "medium":
       price = 850;
       console.log("The price is "+price);
     break;
     case "small":
       price = 600;
       console.log(price);
     default:
       console.log("error"); 
   }
   switch(pcrust){
      case "0":
        crust_price = 0;
      break;
      case "Crispy":
        crust_price = 200;
      break;
      case "thin":
        crust_price = 100;
        break;
      case "Stuffed":
        crust_price = 250;
      break;
      case "Gluten-free":
        crust_price = 180;
      break;
      default:
        console.log("No price"); 
    }
    let topping_value = ptopping.length*50;
    console.log("toppins value" + topping_value);

    if((psize == "0") && (pcrust == "0")){
      console.log("nothing selected");
      $("button.proceed").show();
      $("#information").show();
      $("div.choice").hide();
      alert("Please select pizza size and crust"); 
    }
    else{
      $("button.proceed").hide();
      $("#information").hide();
      $("div.choice").slideDown(1000);
    }

    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);
    
// Add pizza button
    $("button.addPizza").click(function(){
      let pname = $(".name option:selected").val();
      let psize = $("#size option:selected").val();
      let pcrust = $("#crust option:selected").val();
      let ptopping = [];
      $.each($("input[name='toppings']:checked"), function(){            
          ptopping.push($(this).val());
      });
      console.log(ptopping.join(", "));
      switch(psize){
        case "0":
          price =0;
        break;
        case "large":
           price = 1200;
           console.log(price);
         break;
         case "medium":
           price = 850;
           console.log("The price is "+price);
         break;
         case "small":
           price = 600;
           console.log(price);
         default:
           console.log("error"); 
       }
       switch(pcrust){
          case "0":
            crust_price = 0;
          break;
          case "Crispy":
            crust_price = 200;
          break;
          case "Stuffed":
            crust_price = 150;
          break;
          case "Gluten-free":
            crust_price = 180;
          break;
          default:
            console.log("No price"); 
        }
        let topping_value = ptopping.length*50;
        console.log("toppins value" + topping_value);
        total = price + crust_price + topping_value;
        console.log(total);

        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
      // constractor function
      var newOrder = new Getpizza(pname, psize, pcrust,ptopping,total);

      $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);
      
      

    });
    // Checkout button
    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bills is sh. "+checkoutTotal);
      $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
    });

    // home delivery button
    $("button.deliver").click(function(){
      $(".pizzatable").hide();
      $(".choise h2").hide();
      $(".delivery").slideDown(1000);
      $("#addedprice").hide();
      $("button.deliver").hide();
      $("#pizzatotal").hide();
      let deliceryamount= checkoutTotal+150;
      console.log("You will pay sh. "+deliceryamount+" on delivery");
      $("#totalbill").append("Your bill plus delivery fee is: "+deliceryamount);
    });

    // when one clicks place order button
    $("button#final-order").click(function(event){
      event.preventDefault();

      $("#pizzatotal").hide();
      $(".delivery").hide();
      $("button#final-order").hide();
      let deliceryamount= checkoutTotal+150;
      console.log("Final Bill is: "+deliceryamount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
  
        $("#finallmessage").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Prepare sh. "+deliceryamount);
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1200);
      }
      else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
   event.preventDefault();
  });
});
$(document).ready(function(){
  $("#chickenImage").click(function(){
    $("#chickenImage").slideDown('1500').hide('1000');
    $("#chickentikka").show('1500');
  });
  $("#chickentikka").click(function(){
    $("#chickentikka").slideUp('1500');
    $("#chickenImage").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#periperiImage").click(function(){
    $("#periperiImage").slideDown('1500').hide('1000');
    $("#periperi").show('1500');
  });
  $("#periperi").click(function(){
    $("#periperi").slideUp('1500');
    $("#periperiImage").slideDown('1500');
  });
});
$(document).ready(function(){
  $("#rasberryImage").click(function(){
    $("#rasberryImage").slideDown('1500').hide('1000');
    $("#rasberry").show('1500');
  });
  $("#rasberry").click(function(){
    $("#rasberry").slideUp('1500');
    $("#rasberryImage").slideDown('1500');
  });
});
$(document).ready(function(){
  $("#alfredoImage").click(function(){
    $("#alfredoImage").slideDown('1500').hide('1000');
    $("#alfredo").show('1500');
  });
  $("#alfredo").click(function(){
    $("#alfredo").slideUp('1500');
    $("#alfredoImage").slideDown('1500');
  });
});

$(document).ready(function(){
  $("#sunchokeImage").click(function(){
    $("#sunchokeImage").slideDown('1500').hide('1000');
    $("#sunchoke").show('1500');
  });
  $("#sunchoke").click(function(){
    $("#sunchoke").slideUp('1500');
    $("#sunchokeImage").slideDown('1500');
  });
});
$(document).ready(function(){
  $("#buffaloImage").click(function(){
    $("#buffaloImage").slideDown('1500').hide('1000');
    $("#buffalo").show('1500');
  });
  $("#buffalo").click(function(){
    $("#buffalo").slideUp('1500');
    $("#buffaloImage").slideDown('1500');
  });
});
$(document).ready(function(){
  $("#bbqImage").click(function(){
    $("#bbqImage").slideDown('1500').hide('1000');
    $("#bbq").show('1500');
  });
  $("#bbq").click(function(){
    $("#bbq").slideUp('1500');
    $("#bbqImage").slideDown('1500');
  });
});
$(document).ready(function(){
  $("#pepperoniImage").click(function(){
    $("#pepperoniImage").slideDown('1500').hide('1000');
    $("#pepperoni").show('1500');
  });
  $("#pepperoni").click(function(){
    $("#pepperoni").slideUp('1500');
    $("#pepperoniImage").slideDown('1500');
  });
});
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("textarea#comment").val();
    if ($("input#name").val() && $("input#email").val()){
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }
  });
});