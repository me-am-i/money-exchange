// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
if (currency > 10000) {
		return { error: 'You are rich, my friend! We don\'t have so much coins for exchange' };
};

if (currency < 1) {
	
	return {};

};


if (currency < 10000) {

	var H = Math.trunc(currency / 50); 
	var Q = Math.trunc((currency-(50*H))/25);
	var D = Math.trunc((currency-(50*H)-(25*Q))/10);
	var N = Math.trunc((currency-(50*H)-(25*Q)-(10*D))/5);
	var P = Math.trunc((currency-(50*H)-(25*Q)-(10*D)-(5*N)));



		var result;

	
		var HH = {"H":H};
		
	    var QQ = {"Q":Q};
	   
		var DD = {"D":D};
		
		var NN = {"N":N};
		
		var PP = {"P":P};



		
		if (H>0 && Q>0 && D>0 && N>0 && P>0) {
			 return result = Object.assign(HH, QQ, DD, NN, PP);
			 
		};

		if (H>0 && D>0 && N>0 && P>0) {
			 return result = Object.assign(HH, DD, NN, PP);
		};

	if (H>0 && Q>0 && N>0 && P>0) {
			 return result = Object.assign(HH, QQ, NN, PP);
			};

		if (H>0 && Q>0 && D>0 && P>0) {
			 return result = Object.assign(HH, QQ, DD, PP);
			};

		if (H>0 && Q>0 && D>0 && N>0 ) {
			 return result = Object.assign(HH, QQ, DD, NN);
			};




		if (Q>0 && D>0 && N>0 && P>0) {
			return result = Object.assign(QQ, DD, NN, PP);
			 
		};


		if (H>0 && Q>0 && P>0 ) {
			 return result = Object.assign(HH, QQ, PP);
			};

		if (H>0 && D>0 && P>0 ) {
			 return result = Object.assign(HH, DD, PP);
			};


		if (H>0 && D>0 && N>0 ) {
			 return result = Object.assign(HH, DD, NN);
			};

		if (D>0 && N>0 && P>0) {
			 return result = Object.assign(DD, NN, PP);
			 
		};

		if (D>0  && P>0) {
			 return result = Object.assign(DD, PP);
			 
		};


		if (H>0  && P>0) {
			 return result = Object.assign(HH, PP);
			 
		};


		if (H>0  && Q>0) {
			 return result = Object.assign(HH, QQ);
			 
		};

		if (N>0 && P>0) {
			return result = Object.assign(NN, PP);
			 
		};

		if (Q>0 && P>0) {
			return result = Object.assign(QQ, PP);
			 
		};

		if (N>0 && H>0) {
			return result = Object.assign(NN, HH);
			 
		};

		if (D>0 && H>0) {
			return result = Object.assign(DD, HH);
			 
		};


			if (D>0 && N>0) {
			return result = Object.assign(DD, NN);
			 
		};


			if (D>0 && Q>0) {
			return result = Object.assign(DD, QQ);
			 
		};





		if (P>0) {
			 return PP;
			 
		};

		
		if (N>0) {
			 return NN;
			 
		};

		if (Q>0) {
			 return QQ;
			 
		};

		if (D>0) {
			 return DD;
			 
		};

		

		if (H>0) {
			 return HH;
			 
		};	



	};



	
};

//TODO: Переписать по человечески
//c = { ...a, ...b }
//c = Object.assign({}, a, b)





