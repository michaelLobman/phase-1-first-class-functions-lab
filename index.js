const returnFirstTwoDrivers = function(drivers) {
	return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
	return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(x) {
	return function(fare) {
		return fare * x;
	}
}

function fareDoubler(fare) {
	return createFareMultiplier(2)(fare);
}

function fareTripler(fare) {
	return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers, driverFunction){
	if (driverFunction === returnFirstTwoDrivers) {
		return returnFirstTwoDrivers(drivers);
	} else if (driverFunction === returnLastTwoDrivers) {
		return returnLastTwoDrivers(drivers);
	}
};




























