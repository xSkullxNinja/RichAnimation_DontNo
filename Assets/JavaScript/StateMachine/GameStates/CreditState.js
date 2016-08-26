function CreditState() {
	State.call(this);
}
CreditState.prototype = Object.create(State.prototype);
CreditState.prototype.constuctor = CreditState;

CreditState.prototype.enter = enterCreditState;
CreditState.prototype.run = runCreditState;
CreditState.prototype.exit = exitCreditState;

function enterCreditState(evt) {
	enterCreditScene(evt);
}
function runCreditState(evt) {
}
function exitCreditState(evt) {
	stage.removeAllChildren();
}
