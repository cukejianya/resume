var lnStickyNavigation;

$(document).ready(function()
{
	applyHeader();
	applyNavigation();
	applyMailTo();
	applyResize();
	checkHash();
	checkBrowser();
	listAbilities();
});

/* HEADER FUNCTIONS */

function applyHeader()
{
	$('.jumbotron').css({ height: ($(window).height()) +'px' });

	lazyLoad($('.jumbotron'));
}

function lazyLoad(poContainer)
{
	/*var lstrSource   = poContainer.attr('data-src');
	var lstrPosition = poContainer.attr('data-position');

	$('<img>').attr('src', lstrSource).load(function()
	{
		poContainer.css('background-image', 'url("'+ lstrSource +'")');
		poContainer.css('background-position', lstrPosition);
		poContainer.css('-ms-filter', '"progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + lstrSource + '\', sizingMethod=\'scale\')"');
		poContainer.css('filter', 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'' + lstrSource + '\', sizingMethod=\'scale\'');
	});*/
}

/* NAVIGATION FUNCTIONS */

function applyNavigation()
{
	applyClickEvent();
	applyNavigationFixForPhone();
	applyScrollSpy();
	applyStickyNavigation();
}

function applyClickEvent()
{
	$('a[href*=#]').on('click', function(e)
	{
		e.preventDefault();

		if( $( $.attr(this, 'href') ).length > 0 )
		{
			$('html, body').animate(
			{
				scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 400);
		}
		return false;
	});
}

function applyNavigationFixForPhone()
{
	$('.navbar li a').click(function(event)
	{
		$('.navbar-collapse').removeClass('in').addClass('collapse');
	});
}

function applyScrollSpy()
{
	$('#navbar-example').on('activate.bs.scrollspy', function()
	{
		window.location.hash = $('.nav .active a').attr('href').replace('#', '#/');
	});
}

function applyStickyNavigation()
{
	lnStickyNavigation = $('.scroll-down').offset().top + 20;

	$(window).on('scroll', function()
	{
		stickyNavigation();
	});

	stickyNavigation();
}

function stickyNavigation()
{
	if($(window).scrollTop() > lnStickyNavigation)
	{
		$('body').addClass('fixed');
	}
	else
	{
		$('body').removeClass('fixed');
	}
}

/* MAILTO FUNCTION */

function applyMailTo()
{
	$('a[href*=mailto]').on('click', function(e)
	{
		var lstrEmail = $(this).attr('href').replace('mailto:', '');

		lstrEmail = lstrEmail.split('').reverse().join('')

		$(this).attr('href', 'mailto:' + lstrEmail);
	});
}

/* RESIZE FUNCTION */

function applyResize()
{
	$(window).on('resize', function()
	{
		lnStickyNavigation = $('.scroll-down').offset().top + 20;

		$('.jumbotron').css({ height: ($(window).height()) +'px' });
	});
}

/* HASH FUNCTION */

function checkHash()
{
	lstrHash = window.location.hash.replace('#/', '#');

	if($('a[href='+ lstrHash +']').length > 0)
	{
		$('a[href='+ lstrHash +']').trigger('click');
	}
}

/* IE7- FALLBACK FUNCTIONS */

function checkBrowser()
{
	var loBrowserVersion = getBrowserAndVersion();

	if(loBrowserVersion.browser == 'Explorer' && loBrowserVersion.version < 8)
	{
		$('#upgrade-dialog').modal({
			backdrop: 'static',
			keyboard: false
		});
	}
}

function getBrowserAndVersion()
{
	var laBrowserData = [{
		string: 		navigator.userAgent,
		subString: 		'MSIE',
		identity: 		'Explorer',
		versionSearch: 	'MSIE'
	}];

	return {
		browser: searchString(laBrowserData) || 'Modern Browser',
		version: searchVersion(navigator.userAgent) || searchVersion(navigator.appVersion) || '0.0'
	};
}

function searchString(paData)
{
	for(var i = 0; i < paData.length; i++)
	{
		var lstrDataString 	= paData[i].string;
		var lstrDataProp 	= paData[i].prop;

		this.versionSearchString = paData[i].versionSearch || paData[i].identity;

		if(lstrDataString)
		{
			if(lstrDataString.indexOf(paData[i].subString) != -1)
			{
				return paData[i].identity;
			}
		}
		else if(lstrDataProp)
		{
			return paData[i].identity;
		}
	}
}

function searchVersion(pstrDataString)
{
	var lnIndex = pstrDataString.indexOf(this.versionSearchString);

	if(lnIndex == -1)
	{
		return;
	}

	return parseFloat(pstrDataString.substring(lnIndex + this.versionSearchString.length + 1));
}

function listAbilities()
{
	var listOfAbilities =  {
		'Languages': {
			'HTML':4,
			'CSS': 4,
			'Javascript':3,
			'Python':3,
			'Git':3,
			'Matlab':2,
			'Java':2,
			'Swift':2,
			'PHP':2,
			'Objective-C':1,
		},
		'Skills': {
			'OSX':5,
			'Linux OS':4,
			'Gimp':4,
			'MS Word':4,
			'Powerpoint':4,
			'Ubuntu OS':3,
			'Terminal/Bash':3,
			'Excel':3,
			'iMovie': 1
		},
	};

	createAbilitySections(listOfAbilities);
	var listOfCareers = [
		{
			'Company':'Medstar SiTEL', 'Time':'July 2014-Aug 2014', 'Location':'D.C. Washington', 'Website':['https://www.sitelms.org/home/login/','sitelms.org'], 'Position':'Front-End Developer Intern', 'Task':[
			'Worked with programming languages such as PHP (First-Time), HTML, CSS, Bootstrap, and Google APIs',
			'Was able to service over 3000 users through the SiTEL-LMs website',
			'Worked with Linux and Ubuntu operating systems',
			'Established a great sense of teamwork'
			]
		},
		{
			'Company':'Department of Resident Life, Univ. of MD', 'Time':'Aug 2013-May 2014', 'Location':'College Park, MD/ University of Maryland', 'Website':['http://reslife.umd.edu/','reslife.umd.edu',], 'Position':'Customer Service Supervisor', 'Task':[
				'Establishes and maintains a productive environment where people strive for quality customer service',
				'Supervises and provides 13 Community Assistants with frequent performance feedback and coaching in groups and in person aimed at improvement',
				'Communicates objectives and policies to others while creating an environment where excellence and needs are accepted and addressed',
			]
			},
		// {
		// 	'Company':'', 'Time':'', 'Location':'', 'Website':[], 'Position':'', 'Task':[]
		// },
	];
	createCareerList(listOfCareers);

}


function createAbilitySections(dict) {
	var headersList = Object.keys(dict); //turns Object's keys into a list

	for (var i = 0; i < headersList.length; i++) {

		var header = '<hr> <h3>'+headersList[i]+'</h3>';
		$('#abilities').append(header);

		var listsList = Object.keys(dict[headersList[i]]); // Get array of subskills
		var list = '';
		var newListSection = '';
		for(var j = 0; j < listsList.length; j++) {
			//make stars
			var numOfStars = dict[headersList[i]][listsList[j]];
			var stars = '';
			for(var k = 0; k < numOfStars; k++) { //filled stars
				stars += '<span class="glyphicon glyphicon-star filled"></span>';
			}
			for(k=0; k < 5-numOfStars; k++) { //empty stars
				stars  += '<span class="glyphicon glyphicon-star "></span>';
			}
			//Add listitems
			list += '<li><span class="ability-title">'+listsList[j]+'</span><span class="ability-score">'+stars+'</span></li>';
			//append list column
			if (j+1 === Math.ceil(listsList.length/2) || j+1 === listsList.length ) {
				newListSection += '<div class="col-md-6"><ul class="no-bullets">'+list+'</ul></div>';
				list = '';
			}

		}
		$('#abilities').append('<div class="row">'+newListSection+'</div>');
	}
}

function createCareerList(arr) {
	var fullList = '';
	for (var i = 0; i < arr.length; i++){

		var dict = arr[i];
		var company = '<h4>'+dict['Company']+'</h4>';
		var period = '<p class="experience-period">'+dict['Time']+'</p>';
		var position = '<strong>'+dict['Position']+'</strong>';
		var task = '';

		for (var j = 0; j < dict['Task'].length; j++) {
			task += '<span class="glyphicon glyphicon-arrow-right"></span> '+dict['Task'][j];

			if (j+1 < dict['Task'].length) {
				task+= '<br>'
			}

		}

		task = '<span class="hidden-phone">'+task+'</span>';
		var location = '<span class="location"><span class="glyphicon glyphicon-map-marker"></span> '+dict['Location']+'</span><span class="seperator"> | </span>';
		var link = '<span class="link"><span class="glyphicon glyphicon-link"></span><a href='+dict['Website'][0]+' target="_blank"> '+dict['Website'][1]+'</a></span>';

		var div1 = '<div class="col-md-4">'+company+period+'</div>';
		var subdiv = '<span class="experience-details">'+location+link+'</span>';
		var div2 = '<div class="col-md-8"><p>'+position+task+subdiv+'</p></div>';
		fullList += div1+div2;
	}

	$('#Careers').append('<div class="experience row">'+fullList+'</div>');
}
