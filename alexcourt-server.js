var five = require("johnny-five"),
    board = new five.Board();

	board.on("ready", function() {

	  lcd = new five.LCD({
	    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
	    // Arduino pin # 7    8   9   10  11  12
	    pins: [ 7, 8, 9, 10, 11, 12 ],

	    // Options:
	    // bitMode: 4 or 8, defaults to 4
	    // lines: number of lines, defaults to 2
	    // dots: matrix dimensions, defaults to "5x8"
	  });

	  lcd.on("ready", function() {
	    // Tell the LCD you will use the heart character
	    lcd.useChar("check");
	    lcd.useChar("heart");
	    lcd.useChar("duck");

	    // Line 1: Hi rmurphey & hgstrp!
	    lcd.clear()
		lcd.print("StockSoftware");
	    lcd.cursor(1, 0);

	    // Line 2: I <3 johnny-five
	    // lcd.print("I").write(7).print(" johnny-five");
	    // can now be written as:
	    lcd.print("I :heart: johnny-five");

	    setTimeout(function() {
	      lcd.clear()
		  console.log( ".1." )
		  
		  lcd.cursor(0, 0)
		  console.log( ".2." )

		  lcd.print("I :check: :heart: :duck:");
		  console.log( ".3." )
	    }, 3000);
	  });
	  this.repl.inject({
	    lcd: lcd,
		five: five
	  });

	});