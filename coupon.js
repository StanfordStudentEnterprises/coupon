if (Meteor.isClient) {
    
    var data = [
        {
            "id": 1,
            "vendor": "Accent Arts",
            "url": "https://www.dropbox.com/s/jbevp06nnttap6b/AccentArts_dcx2OUT-01.tif?dl=0"
        },
        {
            "id": 2,
            "vendor": "Allied Brokers",
            "url": "https://www.dropbox.com/s/d37wvqb4viiu0ot/AlliedBrokers_OLprem-01.png?dl=0"
        },
        {
            "id": 3,
            "vendor": "Anza Airport Parking",
            "url": "https://www.dropbox.com/s/2dahbtwp0hcucx4/AnzaAirportParking_olPrem.gif?dl=0"
        },
        {
            "id": 4,
            "vendor": "Bell's Books",
            "url": "https://www.dropbox.com/s/oy0487qaojkl4k5/BellsBooks_LogoOut-01.tif?dl=0"
        },
        {
            "id": 5,
            "vendor": "Campus Bike Shop",
            "url": "https://www.dropbox.com/s/be8cci2x6hlobpw/CampusBikeShop_gcout-01.tif?dl=0"
        },
        {
            "id": 6,
            "vendor": "Earl Whetstone DDS",
            "url": "https://www.dropbox.com/s/5rajxqm143jwwja/EarlWhetstoneDDS_dcOut-01.tif?dl=0"
        },
        {
            "id": 7,
            "vendor": "GreatClips",
            "url": "https://www.dropbox.com/s/ys3sf0a3nlrjgd1/GreatClips_dcOUT-01.tif?dl=0"
        },
        {
            "id": 8,
            "vendor": "Holiday Cleaners",
            "url": "https://www.dropbox.com/s/tvyjxrtf64a4nx9/HolidayCleaners_yp1-4Vout-01.tif?dl=0"
        },
        {
            "id": 9,
            "vendor": "Jacquies Sew & Sew",
            "url": "https://www.dropbox.com/s/5l63qmad1n0zwc2/Jacquies_gcOut-01.tif?dl=0"
        },
        {
            "id": 10,
            "vendor": "Love n Care",
            "url": "https://www.dropbox.com/s/np2ng6axz7bu4jc/LoveNCare_yp1-8gsout-01.tif?dl=0"
        },
        {
            "id": 11,
            "vendor": "Massage Therapy Center",
            "url": "https://www.dropbox.com/s/jxyog8fmk53bnqk/MassageTherapyCenter_ugOLprem.png?dl=0"
        },
        {
            "id": 12,
            "vendor": "Nolan Barton Bradford Olmos LLP",
            "url": "https://www.dropbox.com/s/wt7wr9w7ak9z4uk/NolanBarton_OLprem445px-01.png?dl=0"
        },
        {
            "id": 13,
            "vendor": "Omega Printing",
            "url": "https://www.dropbox.com/s/bye1l57okcohalc/OmegaPrinting_OLprem-01.png?dl=0"
        },
        {
            "id": 14,
            "vendor": "Peninsula Storage",
            "url": "https://www.dropbox.com/s/r7ejamuk2048rf9/PeninsulaStorage_OLprem.png?dl=0"
        },
        {
            "id": 15,
            "vendor": "Roy's Cleaners",
            "url": "https://www.dropbox.com/s/4qes75p2e3wj5r4/RoysCleaners_AdNetSUPost-01.png?dl=0"
        },
        {
            "id": 16,
            "vendor": "The North Face",
            "url": "https://www.dropbox.com/s/91s0aoxi1kpo856/TNFLogoTagUrl485.jpg?dl=0"
        },
            {
            "id": 17,
            "vendor": "West Valley Music",
            "url": "https://www.dropbox.com/s/sg5swawxvliz8q8/westvalleymusic_OLPrem.png?dl=0"
        },
    ];
    
    Template.elements.helpers({
        coupons: function(){
            return data;
        }
    });

    
    $(document).ready(function(){
    	//substr so there isn't a '#'
    	var hashFilter = location.hash.substr(1);
    
    	var mainEl = $('#main');
    	var transitionDuration = 800;
    	var columnWidth = 270;
    	
    	mainEl.isotope({
    		filter: hashFilter,
    		animationEngine: 'best-available', //CSS3 if browser supports it, jQuery otherwise
    		animationOptions: {
    			duration: transitionDuration
    		},
    		containerStyle: {
    			position: 'relative',
    			overflow: 'visible'
    		},
    		masonry: {
    			columnWidth: columnWidth
    		}
    	});	
    	
    	
    	function setSizes(){
    		var availableSpace = $(window).width();
    		var potentialColumns = availableSpace/columnWidth;
    		potentialColumns = Math.floor(potentialColumns);
    		
    		var newWidth = potentialColumns * columnWidth;
    
    		$('.container').width(newWidth);
    	}
    	
    	setSizes();
    
    	
    	function layoutTimer(){
    
    		setTimeout(function(){
    			mainEl.isotope('layout');
    		}, transitionDuration);
    		
    	}
    
    	layoutTimer();
    
    	
    	$(window).resize(function(){
    	
    		setSizes();
    		
    		layoutTimer();
    		
    	});
    
    	
    
    
    
    	var currentCats = hashFilter.split(".");
    	//splice because the first element will be just an empty '', so we get rid of it
    	currentCats.splice(0, 1);
    
    	for (current in currentCats){
    		currentCat = currentCats[current];
    		
    		//Since it splices based on the '.', each '.' disappears, so we need to re-add it
    		currentCats[current] = '.' + currentCat;
    		
    		//Find each link that has a 'href' attribute currently present in the hash
    		$('#controls a[href=#'+currentCat+']').parent().addClass('active');
    		
    		
    		
    	}
    
    	$('#controls a').click(function(){
    		//Change '#cat1' into '.cat1'
    		var catClass = '.'+$(this).attr('href').substr(1);
    		
    		//If the current category is not in the array, add it and make the link active
    		if($.inArray(catClass, currentCats)==-1){ 
    			currentCats.push(catClass);
    			$(this).parent().addClass('active');
    		}
    		//If the current category is in the array, get rid of it and remove the 'active' class
    		else {
    			//position of the current category in the array
    			position = $.inArray(catClass, currentCats); 
    			currentCats.splice(position,1);
    			$(this).parent().removeClass('active');
    		}
    		
    		var newFilter = "";
    		
    		//generate a 'newFilter' string that will be saved into the hash
    		for (current in currentCats){
    			currentCat = currentCats[current];
    			newFilter = newFilter + currentCat;
    		}
    		
    		location.hash = newFilter;
    		
    		mainEl.isotope({
    			filter: newFilter
    		});
    		
    		return false;
    		
    	});
    
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
