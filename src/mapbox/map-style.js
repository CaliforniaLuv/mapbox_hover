
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
            1000, 15
        ],
        [
            'interpolate',
            ['linear'],
            ['get', 'capacity'],
            0, 0,
            0.001, 4.5,
            1, 5,
            10, 6,
            20, 15,
            50, 15,
            100, 15
        ]
    ],
    'circle-stroke-width': 2,
    'circle-stroke-color': '#fff'
  }
}