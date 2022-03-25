
export const countiesLayer = {
  id: 'sanfrancisco',
  type: 'circle',
  source: 'states',
  paint: {
      
    'circle-color': '#ffb300',
    'circle-radius': [
        'case',
        ['boolean', ['feature-state', 'hover'], false],
        [
            'interpolate',
            ['linear'],
            ['get', 'capacity'],
            1000, 13
        ],
        [
            'interpolate',
            ['linear'],
            ['get', 'capacity'],
            1000, 8
        ]
    ],
    'circle-stroke-width': 2,
    'circle-stroke-color': '#fff'
  }
}