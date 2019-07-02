function factorial(calculator.result.value){
	if (calculator.result.value > 0 && calculator.result.value <= 1){
		return 1;
	}
	else {
		return calculator.result.value * factorial(calculator.result.value-1);
	}
	
}