'use strict';

var countryList = [  
   {  
      'id': 'AFG',
      'name': 'Afghanistan',
      'description': ''
   },
   {  
      'id': 'AGO',
      'name': 'Angola',
      'description': ''
   },
   {  
      'id': 'ALB',
      'name': 'Albania',
      'description': ''
   },
   {  
      'id': 'ARE',
      'name': 'United Arab Emirates',
      'description': 'The government will provide you with things like housing, education. You won\'t worry too much about your finances.'
   },
   {  
      'id': 'ARG',
      'name': 'Argentina',
      'description': ''
   },
   {  
      'id': 'ARM',
      'name': 'Armenia',
      'description': ''
   },
   {  
      'id': 'ATA',
      'name': 'Antarctica',
      'description': 'There was a glitch in the universe and you were born as a penguin!'
   },
   {  
      'id': 'ATF',
      'name': 'French Southern and Antarctic Lands',
      'description': ''
   },
   {  
      'id': 'AUS',
      'name': 'Australia',
      'description': 'You will enjoy a relatively peaceful lifestyle. But you have a higher chance of developing melanoma due to the lack of ozone layer.'
   },
   {  
      'id': 'AUT',
      'name': 'Austria',
      'description': ''
   },
   {  
      'id': 'AZE',
      'name': 'Azerbaijan',
      'description': ''
   },
   {  
      'id': 'BDI',
      'name': 'Burundi',
      'description': ''
   },
   {  
      'id': 'BEL',
      'name': 'Belgium',
      'description': ''
   },
   {  
      'id': 'BEN',
      'name': 'Benin',
      'description': ''
   },
   {  
      'id': 'BFA',
      'name': 'Burkina Faso',
      'description': ''
   },
   {  
      'id': 'BGD',
      'name': 'Bangladesh',
      'description': ''
   },
   {  
      'id': 'BGR',
      'name': 'Bulgaria',
      'description': ''
   },
   {  
      'id': 'BHS',
      'name': 'The Bahamas',
      'description': ''
   },
   {  
      'id': 'BIH',
      'name': 'Bosnia and Herzegovina',
      'description': ''
   },
   {  
      'id': 'BLR',
      'name': 'Belarus',
      'description': ''
   },
   {  
      'id': 'BLZ',
      'name': 'Belize',
      'description': ''
   },
   {  
      'id': 'BOL',
      'name': 'Bolivia',
      'description': ''
   },
   {  
      'id': 'BRA',
      'name': 'Brazil',
      'description': 'You will have a great chance to be happy.'
   },
   {  
      'id': 'BRN',
      'name': 'Brunei',
      'description': ''
   },
   {  
      'id': 'BTN',
      'name': 'Bhutan',
      'description': 'You are happy!'
   },
   {  
      'id': 'BWA',
      'name': 'Botswana',
      'description': ''
   },
   {  
      'id': 'CAF',
      'name': 'Central African Republic',
      'description': ''
   },
   {  
      'id': 'CAN',
      'name': 'Canada',
      'description': 'You will learn to play ice hockey from the day your are born.'
   },
   {  
      'id': 'CHE',
      'name': 'Switzerland',
      'description': 'You will enjoy high standards of living.'
   },
   {  
      'id': 'CHL',
      'name': 'Chile',
      'description': ''
   },
   {  
      'id': 'CHN',
      'name': 'China',
      'description': 'Born in a suburban town, you have a low chance of overcoming social inequality.'
   },
   {  
      'id': 'CIV',
      'name': 'Ivory Coast',
      'description': ''
   },
   {  
      'id': 'CMR',
      'name': 'Cameroon',
      'description': ''
   },
   {  
      'id': 'COD',
      'name': 'Democratic Republic of the Congo',
      'description': ''
   },
   {  
      'id': 'COG',
      'name': 'Republic of the Congo',
      'description': ''
   },
   {  
      'id': 'COL',
      'name': 'Colombia',
      'description': 'In a country with high crime rate, you will have to put your dukes up for your life.'
   },
   {  
      'id': 'CRI',
      'name': 'Costa Rica',
      'description': ''
   },
   {  
      'id': 'CUB',
      'name': 'Cuba',
      'description': ''
   },
   {  
      'id': '-99',
      'name': 'Northern Cyprus',
      'description': ''
   },
   {  
      'id': 'CYP',
      'name': 'Cyprus',
      'description': ''
   },
   {  
      'id': 'CZE',
      'name': 'Czech Republic',
      'description': 'You will enjoy rich culture and arts that abound.'
   },
   {  
      'id': 'DEU',
      'name': 'Germany',
      'description': ''
   },
   {  
      'id': 'DJI',
      'name': 'Djibouti',
      'description': ''
   },
   {  
      'id': 'DNK',
      'name': 'Denmark',
      'description': ''
   },
   {  
      'id': 'DOM',
      'name': 'Dominican Republic',
      'description': ''
   },
   {  
      'id': 'DZA',
      'name': 'Algeria',
      'description': ''
   },
   {  
      'id': 'ECU',
      'name': 'Ecuador',
      'description': ''
   },
   {  
      'id': 'EGY',
      'name': 'Egypt',
      'description': ''
   },
   {  
      'id': 'ERI',
      'name': 'Eritrea',
      'description': ''
   },
   {  
      'id': 'ESP',
      'name': 'Spain',
      'description': 'You will enjoy good weather and people. Yet, chances of unemployment are high, even when you have decent qualifications.'
   },
   {  
      'id': 'EST',
      'name': 'Estonia',
      'description': ''
   },
   {  
      'id': 'ETH',
      'name': 'Ethiopia',
      'description': ''
   },
   {  
      'id': 'FIN',
      'name': 'Finland',
      'description': ''
   },
   {  
      'id': 'FJI',
      'name': 'Fiji',
      'description': ''
   },
   {  
      'id': 'FLK',
      'name': 'Falkland Islands',
      'description': ''
   },
   {  
      'id': 'FRA',
      'name': 'France',
      'description': 'You will eat garlic bread for breakfast.'
   },
   {  
      'id': 'GUF',
      'name': 'French Guiana',
      'description': ''
   },
   {  
      'id': 'GAB',
      'name': 'Gabon',
      'description': ''
   },
   {  
      'id': 'GBR',
      'name': 'United Kingdom',
      'description': ''
   },
   {  
      'id': 'GEO',
      'name': 'Georgia',
      'description': 'You will enjoy beautiful scenery and hidden jewels, but will suffer from social instability arising from conflicts.'
   },
   {  
      'id': 'GHA',
      'name': 'Ghana',
      'description': ''
   },
   {  
      'id': 'GIN',
      'name': 'Guinea',
      'description': ''
   },
   {  
      'id': 'GMB',
      'name': 'Gambia',
      'description': ''
   },
   {  
      'id': 'GNB',
      'name': 'Guinea Bissau',
      'description': ''
   },
   {  
      'id': 'GNQ',
      'name': 'Equatorial Guinea',
      'description': ''
   },
   {  
      'id': 'GRC',
      'name': 'Greece',
      'description': 'Rich culture awaits you, and economic hardship as well.'
   },
   {  
      'id': 'GRL',
      'name': 'Greenland',
      'description': ''
   },
   {  
      'id': 'GTM',
      'name': 'Guatemala',
      'description': ''
   },
   {  
      'id': 'GUY',
      'name': 'Guyana',
      'description': ''
   },
   {  
      'id': 'HND',
      'name': 'Honduras',
      'description': ''
   },
   {  
      'id': 'HRV',
      'name': 'Croatia',
      'description': ''
   },
   {  
      'id': 'HTI',
      'name': 'Haiti',
      'description': ''
   },
   {  
      'id': 'HUN',
      'name': 'Hungary',
      'description': ''
   },
   {  
      'id': 'IDN',
      'name': 'Indonesia',
      'description': ''
   },
   {  
      'id': 'IND',
      'name': 'India',
      'description': 'You will face challenges from overpopulation, lack of infrastructures.'
   },
   {  
      'id': 'IRL',
      'name': 'Ireland',
      'description': ''
   },
   {  
      'id': 'IRN',
      'name': 'Iran',
      'description': 'You will find very little political freedom.'
   },
   {  
      'id': 'IRQ',
      'name': 'Iraq',
      'description': ''
   },
   {  
      'id': 'ISL',
      'name': 'Iceland',
      'description': 'You will learn to constantly work out in gyms and have good times with food and wine in order to forget the dark.'
   },
   {  
      'id': 'ISR',
      'name': 'Israel',
      'description': 'You will live in a constant tension with neighboring states, and sometimes be exposed to threats.'
   },
   {  
      'id': 'ITA',
      'name': 'Italy',
      'description': ''
   },
   {  
      'id': 'JAM',
      'name': 'Jamaica',
      'description': 'Yah man'
   },
   {  
      'id': 'JOR',
      'name': 'Jordan',
      'description': ''
   },
   {  
      'id': 'JPN',
      'name': 'Japan',
      'description': 'You will find a modest living in a country with chronic economic depression.'
   },
   {  
      'id': 'KAZ',
      'name': 'Kazakhstan',
      'description': ''
   },
   {  
      'id': 'KEN',
      'name': 'Kenya',
      'description': ''
   },
   {  
      'id': 'KGZ',
      'name': 'Kyrgyzstan',
      'description': ''
   },
   {  
      'id': 'KHM',
      'name': 'Cambodia',
      'description': ''
   },
   {  
      'id': 'KOR',
      'name': 'South Korea',
      'description': 'You will go through very competitive schooling and if unsuccessful, will have a very low chance of making it.'
   },
   {  
      'id': '-99',
      'name': 'Kosovo',
      'description': ''
   },
   {  
      'id': 'KWT',
      'name': 'Kuwait',
      'description': ''
   },
   {  
      'id': 'LAO',
      'name': 'Laos',
      'description': ''
   },
   {  
      'id': 'LBN',
      'name': 'Lebanon',
      'description': ''
   },
   {  
      'id': 'LBR',
      'name': 'Liberia',
      'description': 'You will lack basic sanitation, and have high chance of contracting diseases.'
   },
   {  
      'id': 'LBY',
      'name': 'Libya',
      'description': ''
   },
   {  
      'id': 'LKA',
      'name': 'Sri Lanka',
      'description': ''
   },
   {  
      'id': 'LSO',
      'name': 'Lesotho',
      'description': ''
   },
   {  
      'id': 'LTU',
      'name': 'Lithuania',
      'description': 'You will learn to embrace the cold and enjoy stylish clothes.'
   },
   {  
      'id': 'LUX',
      'name': 'Luxembourg',
      'description': ''
   },
   {  
      'id': 'LVA',
      'name': 'Latvia',
      'description': ''
   },
   {  
      'id': 'MAR',
      'name': 'Morocco',
      'description': ''
   },
   {  
      'id': 'MDA',
      'name': 'Moldova',
      'description': ''
   },
   {  
      'id': 'MDG',
      'name': 'Madagascar',
      'description': ''
   },
   {  
      'id': 'MEX',
      'name': 'Mexico',
      'description': ''
   },
   {  
      'id': 'MKD',
      'name': 'Macedonia',
      'description': ''
   },
   {  
      'id': 'MLI',
      'name': 'Mali',
      'description': ''
   },
   {  
      'id': 'MMR',
      'name': 'Myanmar',
      'description': ''
   },
   {  
      'id': 'MNE',
      'name': 'Montenegro',
      'description': ''
   },
   {  
      'id': 'MNG',
      'name': 'Mongolia',
      'description': ''
   },
   {  
      'id': 'MOZ',
      'name': 'Mozambique',
      'description': ''
   },
   {  
      'id': 'MRT',
      'name': 'Mauritania',
      'description': ''
   },
   {  
      'id': 'MWI',
      'name': 'Malawi',
      'description': ''
   },
   {  
      'id': 'MYS',
      'name': 'Malaysia',
      'description': ''
   },
   {  
      'id': 'NAM',
      'name': 'Namibia',
      'description': ''
   },
   {  
      'id': 'NCL',
      'name': 'New Caledonia',
      'description': ''
   },
   {  
      'id': 'NER',
      'name': 'Niger',
      'description': ''
   },
   {  
      'id': 'NGA',
      'name': 'Nigeria',
      'description': ''
   },
   {  
      'id': 'NIC',
      'name': 'Nicaragua',
      'description': ''
   },
   {  
      'id': 'NLD',
      'name': 'Netherlands',
      'description': 'You will live in a very liberated atmosphere, but such environment also will bring social conflicts and problems.'
   },
   {  
      'id': 'NOR',
      'name': 'Norway',
      'description': 'You will enjoy the benefits of the welfare society while it lasts.'
   },
   {  
      'id': 'NPL',
      'name': 'Nepal',
      'description': ''
   },
   {  
      'id': 'NZL',
      'name': 'New Zealand',
      'description': 'You will venture into awesome nature and have social safety nets.'
   },
   {  
      'id': 'OMN',
      'name': 'Oman',
      'description': ''
   },
   {  
      'id': 'PAK',
      'name': 'Pakistan',
      'description': ''
   },
   {  
      'id': 'PAN',
      'name': 'Panama',
      'description': ''
   },
   {  
      'id': 'PER',
      'name': 'Peru',
      'description': ''
   },
   {  
      'id': 'PHL',
      'name': 'Philippines',
      'description': ''
   },
   {  
      'id': 'PNG',
      'name': 'Papua New Guinea',
      'description': ''
   },
   {  
      'id': 'POL',
      'name': 'Poland',
      'description': ''
   },
   {  
      'id': 'PRI',
      'name': 'Puerto Rico',
      'description': ''
   },
   {  
      'id': 'PRK',
      'name': 'North Korea',
      'description': 'You lack basic human rights and will be brainwashed to worship the dear leader.'
   },
   {  
      'id': 'PRT',
      'name': 'Portugal',
      'description': ''
   },
   {  
      'id': 'PRY',
      'name': 'Paraguay',
      'description': ''
   },
   {  
      'id': 'QAT',
      'name': 'Qatar',
      'description': ''
   },
   {  
      'id': 'ROU',
      'name': 'Romania',
      'description': ''
   },
   {  
      'id': 'RUS',
      'name': 'Russia',
      'description': 'Vodka'
   },
   {  
      'id': 'RWA',
      'name': 'Rwanda',
      'description': ''
   },
   {  
      'id': 'ESH',
      'name': 'Western Sahara',
      'description': ''
   },
   {  
      'id': 'SAU',
      'name': 'Saudi Arabia',
      'description': ''
   },
   {  
      'id': 'SDN',
      'name': 'Sudan',
      'description': ''
   },
   {  
      'id': 'SSD',
      'name': 'South Sudan',
      'description': 'In this relatively new sovereign state, you will enjoy little social stability.'
   },
   {  
      'id': 'SEN',
      'name': 'Senegal',
      'description': ''
   },
   {  
      'id': 'SLB',
      'name': 'Solomon Islands',
      'description': ''
   },
   {  
      'id': 'SLE',
      'name': 'Sierra Leone',
      'description': ''
   },
   {  
      'id': 'SLV',
      'name': 'El Salvador',
      'description': ''
   },
   {  
      'id': '-99',
      'name': 'Somaliland',
      'description': ''
   },
   {  
      'id': 'SOM',
      'name': 'Somalia',
      'description': 'You are likely to have malnutrition and die of early age.'
   },
   {  
      'id': 'SRB',
      'name': 'Republic of Serbia',
      'description': ''
   },
   {  
      'id': 'SUR',
      'name': 'Suriname',
      'description': ''
   },
   {  
      'id': 'SVK',
      'name': 'Slovakia',
      'description': ''
   },
   {  
      'id': 'SVN',
      'name': 'Slovenia',
      'description': ''
   },
   {  
      'id': 'SWE',
      'name': 'Sweden',
      'description': 'Meatball.... Yummm!'
   },
   {  
      'id': 'SWZ',
      'name': 'Swaziland',
      'description': ''
   },
   {  
      'id': 'SYR',
      'name': 'Syria',
      'description': ''
   },
   {  
      'id': 'TCD',
      'name': 'Chad',
      'description': ''
   },
   {  
      'id': 'TGO',
      'name': 'Togo',
      'description': ''
   },
   {  
      'id': 'THA',
      'name': 'Thailand',
      'description': ''
   },
   {  
      'id': 'TJK',
      'name': 'Tajikistan',
      'description': ''
   },
   {  
      'id': 'TKM',
      'name': 'Turkmenistan',
      'description': ''
   },
   {  
      'id': 'TLS',
      'name': 'East Timor',
      'description': ''
   },
   {  
      'id': 'TTO',
      'name': 'Trinidad and Tobago',
      'description': ''
   },
   {  
      'id': 'TUN',
      'name': 'Tunisia',
      'description': ''
   },
   {  
      'id': 'TUR',
      'name': 'Turkey',
      'description': ''
   },
   {  
      'id': 'TWN',
      'name': 'Taiwan',
      'description': ''
   },
   {  
      'id': 'TZA',
      'name': 'United Republic of Tanzania',
      'description': ''
   },
   {  
      'id': 'UGA',
      'name': 'Uganda',
      'description': ''
   },
   {  
      'id': 'UKR',
      'name': 'Ukraine',
      'description': ''
   },
   {  
      'id': 'URY',
      'name': 'Uruguay',
      'description': ''
   },
   {  
      'id': 'USA',
      'name': 'United States of America',
      'description': 'You have a high chance of getting obese.'
   },
   {  
      'id': 'UZB',
      'name': 'Uzbekistan',
      'description': ''
   },
   {  
      'id': 'VEN',
      'name': 'Venezuela',
      'description': ''
   },
   {  
      'id': 'VNM',
      'name': 'Vietnam',
      'description': ''
   },
   {  
      'id': 'VUT',
      'name': 'Vanuatu',
      'description': ''
   },
   {  
      'id': 'PSE',
      'name': 'West Bank',
      'description': ''
   },
   {  
      'id': 'YEM',
      'name': 'Yemen',
      'description': ''
   },
   {  
      'id': 'ZAF',
      'name': 'South Africa',
      'description': ''
   },
   {  
      'id': 'ZMB',
      'name': 'Zambia',
      'description': ''
   },
   {  
      'id': 'ZWE',
      'name': 'Zimbabwe',
      'description': 'You will live in a society with unstable economic policies.'
   }
];



angular.module('lotteryOfBirthApp')
  .service('country', function() { 
   this.countryList = countryList;
});
