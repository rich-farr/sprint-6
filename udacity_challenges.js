// This is the comparator challenge:
function getRelationship(x, y) {
	if (isNaN(x) && isNaN(y)) {
		return "Cannot compare relationship because \"" + x + "\" and \"" + y + "\" are not numbers.";
	} if (isNaN(x) || isNaN(y)) {
		if (isNaN(x)) {
			return "Cannot compare relationship because \"" + x + "\" is not a number.";
		} else return "Cannot compare relationship because \"" + y + "\" is not a number.";
	} if (x > y) {
		return x + " is greater than " + y;
	} if (x < y) {
		return x + " is less than " + y;
	} else return x + " and " + y + " are equal.";
}

// getRelationship(1,4);
// getRelationship(1,1);
// getRelationship("that",2);
// getRelationship("this"," something else");
// getRelationship(3);
// getRelationship("hi");
// getRelationship(NaN);
// getRelationship(NaN, undefined);
// getRelationship(2, "hello");

// This is the astronaut array challenge:
var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
 	alphArray = [];
 	for (var i = 0; i < names.length; i++) {
		var splitName = names[i].split(" ");
		var reverseName = (splitName[1] + ", " + splitName[0]);
		alphArray.push(reverseName);
 	}
 	alphArray.sort();
 	return alphArray;
}

alphabetizer(moonWalkers);

//This is the Pagespeed Insight challenge:

// Iterate through the localizedRuleNames in ruleResults and
// return an array of their strings.
function ruleList(results) {
    var ruleArray = [];
    for (var thing in results.formattedResults.ruleResults) {
        ruleArray.push(results.formattedResults.ruleResults[thing].localizedRuleName);
    }
    return ruleArray;
}

// Iterate through pageStats in the psiResults object and
// return the total number of bytes to load the website.
function totalBytes(results) {
    var bytesArray = [];
    var regEx = /Bytes$/;
    for (var prop in results.pageStats) {
		if (regEx.test(prop))
        bytesArray.push(Number(results.pageStats[prop]));
    }
    var sum = bytesArray.reduce(function(total, num) {
        return total + num;
    },0);
  return "Total number of bytes to load the website: " + sum;
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));