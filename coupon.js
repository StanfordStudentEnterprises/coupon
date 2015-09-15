if (Meteor.isClient) {
    
    var data = [
        {
            "id": 1,
            "vendor": "Accent Arts",
            "url": "https://photos-4.dropbox.com/t/2/AADywLo1DfakebVXN2yfAQRtpm4fOo1pyrCJOgXawA-7og/12/460940423/jpeg/32x32/1/_/1/2/AccentArts_dcx2OUT-01.tif/EO3vj90DGBUgBygH/8qNa9zym7mPhygYScO9vnMH6QP3coCheovUy3_L6-0o?size=1280x960&size_mode=2",
            "logo": "http://static.wixstatic.com/media/f9a8fa_8adcf79040014b05901267a0eaa5d6db.jpg_srz_p_319_69_75_22_0.50_1.20_0.00_jpg_srz"
        },
        {
            "id": 2,
            "vendor": "Allied Brokers",
            "url": "https://photos-5.dropbox.com/t/2/AADzR63fy-z2ZUH0FYIfGqV9MOlLKSpBewAFD9XniQUt9g/12/460940423/png/32x32/1/_/1/2/AlliedBrokers_OLprem-01.png/EO3vj90DGBUgBygH/KZwLIkfUiFLhr2xbyhehvRmPFo8uqxy1Zg4uiFMSNQs?size=1024x768&size_mode=2",
            "logo": "http://s3-media3.fl.yelpcdn.com/bphoto/ARj-E8cUTX1NagDNLGiu2w/180s.jpg"
        },
        {
            "id": 3,
            "vendor": "Anza Airport Parking",
            "url": "https://dl-web.dropbox.com/get/Coupons/AnzaAirportParking_olPrem.gif?_subject_uid=460940423&w=AAA7LJvGirWq2Qloh1JAygH0KQJGRJuaI5a9eAhDrVEcSg&size=1024x768&size_mode=2",
            "logo": "https://www.travelparkinggroup.com/media/images/products/6427.jpg"
        },

        // "Logo" for this one is weak at best
        {
            "id": 4,
            "vendor": "Bell's Books",
            "url": "https://photos-2.dropbox.com/t/2/AADToRa-Sm_liqMLi_iNvArnCD0fIu5Na0Orn-iSmUshag/12/460940423/jpeg/32x32/1/_/1/2/BellsBooks_LogoOut-01.tif/EO3vj90DGBUgBygH/tYdkjK-KoV_uabQR048bzQ2NvJNZGzmcA-bebyl90Kk%2CVTr92k86m0UE222YKCtZwJGjaFF_lEKup_8cnw5ai7s?size=1024x768&size_mode=2",
            "logo": "http://www.temptimes.com/bellsbooks.com/wp-content/uploads/2011/04/Bells.gif"
        },
        {
            "id": 5,
            "vendor": "Campus Bike Shop",
            "url": "https://photos-1.dropbox.com/t/2/AABi-Qr7xAtLPCdyBReLcmQnDzVqb5uHTdvffNcdZq7DaQ/12/460940423/jpeg/32x32/1/_/1/2/CampusBikeShop_gcout-01.tif/EO3vj90DGBUgBygH/n5Ym3nXqliPhuB4aANwA-m3xNDerfgbWzvCpuXm5RVw?size=1024x768&size_mode=2",
            "logo": "http://www.shoppaloalto.com/microsite/photos/1035956-01.jpg"
        },
        {
            "id": 6,
            "vendor": "Earl Whetstone DDS",
            "url": "https://photos-2.dropbox.com/t/2/AAA_0jeepwXnfeJ4vRMlJfNH9CQsbyU9taZ8NWJSKVZWlw/12/460940423/jpeg/32x32/1/_/1/2/EarlWhetstoneDDS_dcOut-01.tif/EO3vj90DGBUgBygH/0M9hSJTT8RHv6d4B8Z091uZCl_oEBeQzlmFCelleS3s?size=1024x768&size_mode=2",
            "logo": "https://d1ce9kesr9je4v.cloudfront.net/45266large.jpg"
        },
        {
            "id": 7,
            "vendor": "GreatClips",
            "url": "https://photos-3.dropbox.com/t/2/AAB6CgzfahBhKUvrzr2ozUDzlD560xSctQfU3tLjTyOzOw/12/460940423/jpeg/32x32/1/_/1/2/GreatClips_dcOUT-01.tif/EO3vj90DGBUgBygH/dUmgTavqSbjmrKWrkm2X5SAUcez3O1FJf3SES8vfccQ?size=1024x768&size_mode=2",
            "logo": "http://www.brandsoftheworld.com/sites/default/files/styles/logo-thumbnail/public/082012/great_clips_logowithtag_black.png?itok=NnTUhzKL"
        },
        {
            "id": 8,
            "vendor": "Holiday Cleaners",
            "url": "https://photos-3.dropbox.com/t/2/AACTR4uEtENi11xBgsj-ZlPi7L8TKOyT4_HymElYC6W0Bw/12/460940423/jpeg/32x32/1/_/1/2/HolidayCleaners_yp1-4Vout-01.tif/EO3vj90DGBUgBygH/O9wI-_wutwSo0sWmL585NUSI3wpYLUCsh9psRnlgkF0?size=1024x768&size_mode=2",
            "logo": "http://www.holidaymidtown.com/img/holidaylogo-med.gif"
        },
        {
            "id": 9,
            "vendor": "Jacquies Sew & Sew",
            "url": "https://photos-6.dropbox.com/t/2/AAD_dpVhAbbLkSJza3YzaVq8JSGpv-7sDHQKD8V7tCCTgQ/12/460940423/jpeg/32x32/1/_/1/2/Jacquies_gcOut-01.tif/EO3vj90DGBUgBygH/16x_4e7PQkxqQVSdHy77kq-mDdqP_6lGmXQ5qoXyzLA?size=1024x768&size_mode=2",
            "logo": "https://pbs.twimg.com/profile_images/496764826954104833/xS0sbFUl_400x400.png"
        },
        {
            "id": 10,
            "vendor": "Love n Care",
            "url": "https://photos-3.dropbox.com/t/2/AADnQNqSG98uxKHO3M713pZc4bOfjqyXahRc877Cn0SqcQ/12/460940423/jpeg/32x32/1/_/1/2/LoveNCare_yp1-8gsout-01.tif/EO3vj90DGBUgBygH/Fx-bbLx-j3D1ZDhDvq1yJWJ2vV49s8kx23QyZeEyrUQ?size=1024x768&size_mode=2",
            "logo": "http://lovencarepreschoolpaloalto.com/images/bright.jpg"
        },
        {
            "id": 11,
            "vendor": "Massage Therapy Center",
            "url": "https://photos-4.dropbox.com/t/2/AAB6rLCioWpDt3wD_R1ye-3b4rdVTO8s8DR-srSJeI22aA/12/460940423/png/32x32/1/_/1/2/MassageTherapyCenter_ugOLprem.png/EO3vj90DGBUgBygH/mWgFwDnVYpflCzVvhyaRrjesioqlRreexdXA1chMGhQ?size=1024x768&size_mode=2",
            "logo": "https://pbs.twimg.com/profile_images/3264638305/0cbdf8a3f373c62a83e40b41ffc06620_bigger.png"
        },
        {
            "id": 12,
            "vendor": "Nolan Barton Bradford Olmos LLP",
            "url": "https://photos-4.dropbox.com/t/2/AAAtGERmOWzOPD11UIIkit9pbJYxCCXykcuJomTmgfDAjA/12/460940423/png/32x32/1/_/1/2/NolanBarton_OLprem445px-01.png/EO3vj90DGBUgBygH/twTBLHMpz0ttUWYLu2BMZFD0S6PiHDTMgQ3Fbfr24R0?size=1024x768&size_mode=2",
            "logo": "http://static1.squarespace.com/static/54c2f290e4b02cf35cef66a5/t/54e00028e4b034409bc61813/1429585523992/?format=1500w"
        },
        {
            "id": 13,
            "vendor": "Omega Printing",
            "url": "https://photos-4.dropbox.com/t/2/AABQ5ncMKHM7bEel9zbyPbeRRPesANmdk9uRZo7jngPMwg/12/460940423/png/32x32/1/_/1/2/OmegaPrinting_OLprem-01.png/EO3vj90DGBUgBygH/a13mlhwrZ9EDRkeAK46bvI8XRX-8tlMaGCXcH9pLwt8?size=1024x768&size_mode=2",
            "logo": "http://www.omega-printing.com/images/header.png"
        },
        {
            "id": 14,
            "vendor": "Peninsula Storage",
            "url": "https://photos-2.dropbox.com/t/2/AAC2hHmGpvVEhkARuXNQ95I3H02DSw_szU0_f0_T8oCN1g/12/460940423/png/32x32/1/_/1/2/PeninsulaStorage_OLprem.png/EO3vj90DGBUgBygH/TmOxIp7_4GHtFICwcRUvCA_sn0wShlJ5RJQ77DBrTW4?size=1024x768&size_mode=2",
            "logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdbA-XhUAXEVgCmJvpgDScH-K83HYRG7d66SmUtHU_kYTRv4Q"
        },
        //  No logo
        {
            "id": 15,
            "vendor": "Roy's Cleaners",
            "url": "https://photos-2.dropbox.com/t/2/AAD88gmaXy-icksssUMnjEOniInOBJDvPy8GrjO3FNJ7Mw/12/460940423/png/32x32/1/_/1/2/RoysCleaners_AdNetSUPost-01.png/EO3vj90DGBUgBygH/IpeimU-EfqYweo_fJXe47X0eU-MsfHkhpUm7VmraNVQ?size=1024x768&size_mode=2",
            "logo": ""
        },
        {
            "id": 16,
            "vendor": "The North Face",
            "url": "https://photos-3.dropbox.com/t/2/AAB02kpEF_XAyGPseMhwoQfRLLD0M0iajCGzfohu7yid7Q/12/460940423/jpeg/32x32/1/_/1/2/TNFLogoTagUrl485.jpg/EO3vj90DGBUgBygH/p4RxKMQQmh4jo5TzXz3TtlTWsdNmugKf_d8ehJYJpHY?size=1024x768&size_mode=2",
            "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/The_North_Face_logo.svg/1024px-The_North_Face_logo.svg.png"
        },
            {
            "id": 17,
            "vendor": "West Valley Music",
            "url": "https://photos-6.dropbox.com/t/2/AACW5O1C6-P8XUckMPOlAxZYsJiIdNWGEACQQVU-o3HI-w/12/460940423/png/32x32/1/_/1/2/westvalleymusic_OLPrem.png/EO3vj90DGBUgBygH/fK780Nkf-N-UMbfQRjLqFfGM8KZdtjxmkExq2HdGj2s?size=1024x768&size_mode=2",
            "logo": "http://wendywaller.com/wp-content/uploads/2014/06/west-valley-music.png"
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
