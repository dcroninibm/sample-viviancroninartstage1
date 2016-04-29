(function() {
	var Realmac = Realmac || {};

	Realmac.meta = {
		
		// Set the browser title
		//
		// @var String text
		setTitle: function(text) {
			return document.title = text;
		},
		
		// Set the content attribute of a meta tag
		//
		// @var String name
		// @var String content
		setTagContent: function(tag, content){
			// If the tag being set is title
			// return the result of setTitle
			if ( tag === 'title' )
			{
				return this.setTitle(content);
			}
			
			// Otherwise try and find the meta tag
			var tag = this.getTag(tag);
			
			// If we have a tag, set the content
			if ( tag !== false )
			{
				return tag.setAttribute('content', content);
			}
			
			return false;
		},
		
		// Find a meta tag
		//
		// @var String name
		getTag: function(name) {
			var meta = document.querySelectorAll('meta');
			
			for ( var i=0; i<meta.length; i++ )
			{
				if (meta[i].name == name){
					return meta[i];
				}
			}
			
			var tag = document.createElement('meta');
			tag.name = name;
			document.getElementsByTagName('head')[0].appendChild(tag);
			
			return tag;
		}
	};
 
	// Object containing all website meta info
	var websiteMeta = {"4c558bd3caa9d548171060784609f772-11.php":"￼￼\nWe had a wonderful time at the Art Walk on Saturday.   These cards where given to everyone so they could find the different locations where Art was","355b8fe1777d9add2d16de8883117eb8-21.php":"￼\nI painted this painting for this year's Christmas card.   I used Tiny Prints to build a card with this painting on the front.  They printed them for","archive-sep-2015.php":"Archives for Sep 2015","archive-aug-2013.php":"Archives for Aug 2013","archive-jun-2014.php":"Archives for Jun 2014","archive-may-2014.php":"Archives for May 2014","63ec28a543ec6cedf5a4eaf6f5dbc4bc-4.php":"￼\nThe weather in North Carolina is finally getting nice.   While walking on the beach I caught these seagulls just enjoying the nice weather.   They l","archive-sep-2014.php":"Archives for Sep 2014","48ab8f3a6e46ed8e7d8551bfbda9968a-10.php":"￼\nOn Saturday and Sunday I painted at the Galleria.   I worked on this painting on Saturday, of orange lilies which I took at a park in New England.  ","archive-may-2013.php":"Archives for May 2013","archive-sep-2013.php":"Archives for Sep 2013","a7ba5337ec832d733c77de737aff3904-20.php":"￼￼\nI dropped the two new paintings above along with Autumn Flight for the Seratoma Arts Center Holiday Sale.  The Sale runs through November and Decem","6bb88427261fa3c5b52f33a896784210-22.php":"￼\nMy sisters and I grew up in Malden on Hudson. Our house overlooked the Hudson River. I painted 3 identical pictures of our childhood house, and gave","archive-sep-2012.php":"Archives for Sep 2012","archive-jan-2016.php":"Archives for Jan 2016","archive-oct-2015.php":"Archives for Oct 2015","0edad805592a6cb83ee507af4d5077d8-13.php":"￼￼￼\nTwo of my artist friends and I opened Blue Iris Studio as part of the Galleria Raleigh, in North Raleigh.  We share hanging our pictures.   I am s","c83855b349ca4699b622f59717a50321-16.php":"￼￼￼\n￼￼\nTraveling in the Caribbean for vacation.   Always a good opportunity to do additional research for ideas.   Just visited San Juan yesterday and","archive-apr-2014.php":"Archives for Apr 2014","37538ab2fbd1b07504ba2010ef46f6f6-14.php":"￼\n  Come join me and the other artists at the Spouter Inn tomorrow as part of the Beaufort Art Walk.  I will be there to talk with all that come by.  ","16c39e03f719d6335076ba015b1fdd69-19.php":"￼\nI submitted 2 paintings to the State Fair this year.   My painting \"Pears and Fruit\" won 2 ribbons.  It won first prize from the Society of Decorati","category-work.php":"A list of posts in category &ldquo;Work&rdquo;","44c7469157d37434f1d0a5671e2e6241-5.php":"￼\nI spent 10 days in the Rocky Mountains this summer.  Was a really terrific trip and saw lots of interesting wildlife and scenery.  Look for some pai","b866194b2f4ef08319dd160b3518a1ac-6.php":"￼\nThis years fair was really good.  I put in this picture which is a barn in North Raleigh near my home.   I always enjoy seeing it and felt like it w","archive-oct-2012.php":"Archives for Oct 2012","archive-dec-2015.php":"Archives for Dec 2015","346b49e5d5e5af776e08b4631e2e687c-3.php":"￼\nDuring the month of September 2012 this painting was displayed at Seratoma Arts Center.  My teacher was showing his work along with some of the stud","bf5ac2ae474a052aed57a83fbe03d636-1.php":"￼\nThis September they changed the pictures at the Spouter Inn.   The new pictures will be there the rest of this year.  I now have 5 paintings display","8245e1116f60df32667b24c5df77075c-12.php":"￼\nWith the cold weather over the last few weeks I was thinking about how nice this country cottage would be in the summer.  I haven’t done any buildin","f9418a296ba45fbee58182e1c7b0c816-17.php":"￼\nMy sister has this really pretty cat.  She was able to get a nice close up photo.  She really liked the photo so I painted it for her birthday.   Th","690f8b99fdf442f7ff42dbb3fbf2d063-15.php":"￼\nOn June 2nd Blue Iris Studio moved to a larger booth in the Galleria.  We add an additional local artist so now we are four artists with a friend wh","bb3508ecd56a12737e80b6c1ba781bbf-18.php":"￼\nWe had a wonderful day on Wednesday hiking on Shackelford Island.  There was very few people and lots of the ponies.  I was able to get a lot of new","archive-dec-2013.php":"Archives for Dec 2013","ce88562652fb1c2810f925d62199c943-2.php":"￼\nTonight we had a very nice artist reception at the Spouter Inn.  There were about 30 people and several of the artists that are displaying their pic","archive-dec-2012.php":"Archives for Dec 2012","category-apple.php":"A list of posts in category &ldquo;Apple&rdquo;","archive-mar-2014.php":"Archives for Mar 2014","64bc5199f6045701af568bf29313299e-0.php":"￼￼\n The Visual Art Exchange in Raleigh is having its annual December show.  I have two of my paintings there along with many of the other new artists ","category-personal.php":"A list of posts in category &ldquo;Personal&rdquo;","c719dc18cefba7a88e8ba50977d82e33-7.php":"￼\nI displayed this painting at the North Carolina State Fair.  I hope many people enjoyed seeing this as they walked around the fair.  This painting w","archive-nov-2013.php":"Archives for Nov 2013","c9dfa78eadc81a19ea66b570c89bdcdb-9.php":"￼\nStarting tomorrow for the next 3 months several of my paintings will be shown at the Spouter Inn in Beaufort, NC.  This is one of the paintings that","archive-feb-2014.php":"Archives for Feb 2014","category-humor.php":"A list of posts in category &ldquo;Humor&rdquo;","a899cd4a38b857bfafb894cdd45c4bee-8.php":"￼\n\tYesterday I started displaying some of my art work at this classic gallery.  Nestled in downtown Beaufort it shows a variety of local and regional "};
 
	// pageId must match the key in websiteMeta object
	var url = window.location.pathname;
	var pageId = url.substring(url.lastIndexOf('/')+1);
	if (!pageId || pageId.length == 0){
		pageId = 'index.html';
	}
	pageMeta = websiteMeta[pageId];
 
	// If we have meta for this page
	if (pageMeta){
		Realmac.meta.setTagContent('description', pageMeta);
	}
 
 })();