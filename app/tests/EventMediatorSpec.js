describe("Event Mediator", function() {

	var $rootScope,
		sut,
		subscriptionSpy,
		container,
		eventName;

	beforeEach(module('SpagEventMediator'));

	beforeEach(inject(function(_$rootScope_, $controller, EventMediator) {
		$rootScope = _$rootScope_;
		$scope = $rootScope.$new();
		sut = EventMediator;
	}));

	beforeEach(function() {
		subscriptionSpy = jasmine.createSpy('subscriptionSpy'),
		eventName = 'MockEvent';
	});

	it("should subscribe a function with the eventName on the rootScope", function() {
		spyOn($rootScope, '$on');
		sut.subscribe($scope, eventName, subscriptionSpy);
		expect($rootScope.$on).toHaveBeenCalledWith(eventName, subscriptionSpy);
	});

	it("should call the event when the event name is sent to the mediator", function() {
		sut.subscribe($scope, eventName, subscriptionSpy);
		sut.emit(eventName);
		expect(subscriptionSpy).toHaveBeenCalled();
	});

	it("should deregister the event from the subscribers object on deregister", function() {
		sut.subscribe($scope, eventName, subscriptionSpy);
		sut.unsubscribe($scope, eventName);
		sut.emit(eventName);
		expect(subscriptionSpy).not.toHaveBeenCalled();
	});

	it("should have one event in the subscribers object for the container", function() {
		sut.subscribe($scope, eventName, subscriptionSpy);
		expect(sut.subscribers[$scope.$id].length).toBe(1);
	});

	it("the event should not be in the subscribers anymore", function() {
		sut.subscribe($scope, eventName, subscriptionSpy);
		sut.unsubscribe($scope, eventName);
		expect(sut.subscribers[$scope.$id].length).toBe(0);
	});

	it("will deregister all events for a container on removeEventsForContainer", function() {
		sut.subscribe($scope, eventName, subscriptionSpy);
		sut.unsubscribeAllForScope($scope);
		expect(sut.subscribers[$scope.$id].length).toBe(0);
	});

	it("will automatically deregister all subscriptions on $destroy", function() {
		sut.subscribe($scope, eventName, subscriptionSpy);
		spyOn(sut.subscribers[$scope.$id][0], 'deregistration').andCallThrough();
		spyOn(sut, 'removeNullEvents');
		$scope.$destroy();
		expect(sut.subscribers[$scope.$id][0].deregistration).toHaveBeenCalled();
	});

	xit("will remove the events from the container", function() {

	});

});

















