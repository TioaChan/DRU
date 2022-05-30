let waymark={
	"DRU": {
		"1": {
			"name": "1",
			"x": 109.33380951166243,
			"z": 90.66619048833758,
			"visible": true
		},
		"2": {
			"name": "2",
			"x": 109.33380951166243,
			"z": 109.33380951166243,
			"visible": true
		},
		"3": {
			"name": "3",
			"x": 90.66619048833758,
			"z": 109.33380951166243,
			"visible": true
		},
		"4": {
			"name": "4",
			"x": 90.66619048833758,
			"z": 90.66619048833758,
			"visible": true
		},
		"A": {
			"name": "A",
			"x": 100,
			"z": 86.8,
			"visible": true
		},
		"B": {
			"name": "B",
			"x": 113.2,
			"z": 100,
			"visible": true
		},
		"C": {
			"name": "C",
			"x": 100,
			"z": 113.2,
			"visible": true
		},
		"D": {
			"name": "D",
			"x": 86.8,
			"z": 100,
			"visible": true
		}
	}
}

const coefficient=0.25
function zoom(value) {
    return value*coefficient
}


const waymark_items = Object.keys(waymark.DRU)
waymark_items.forEach(key => {
    waymark.DRU[key].x=zoom( waymark.DRU[key].x-100);
    waymark.DRU[key].z=zoom( waymark.DRU[key].z-100);
})
console.log(JSON.stringify(waymark));


