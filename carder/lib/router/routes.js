Router.route('/card/:_id', function() {
	this.layout('BasicLayout');
	this.render('Card', {
		data: function() {
			return {
				title: "Card Title"
			};
		}
	});
	this.render('Aside', {
		to: 'aside'
	});
	this.render('Footer', {
		to: 'footer',
		data: function() {
			return {
				cc: "2014"
			}
		}
	});
});

Router.route('/card2/:_id', function() {
	this.layout('BasicLayout');
	this.render('Card2', {
		data: function() {
			return {
				title: "Card Title"
			};
		}
	});
});

Router.route('/', function () {
	this.layout('NavigationLayout');
  this.render('Home');
});

Router.route('/one', function () {
	this.layout('NavigationLayout');
  this.render('PageOne');
});

Router.route('/two', function () {
	this.layout('NavigationLayout');
  this.render('PageTwo');
});