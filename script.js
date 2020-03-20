//***********************************//
//*** Global Variable Definitions ***//
//***********************************//

// Background Colors
var bgColorDark = '#000000';
var bgColorMid = '#1F1F1F';
var bgColorLight = '#FFFFFF';

// Rotor Core Color Palettes
var generalPalette = ['#6C91EF', '#E4780C', '#498221',' #186DB9', '#D0396B', '#8F90A3','#A05527' ,'#9B48A8', '#E9639B', '#6C677F', '#998700', '#169C85'];
var brandPalette = ['#0033AB', '#FF7602', '#D63A5B',' #2D6BFF', '#53B8B3'];
var graduatedBrandPaletteAccentOne = ['#00206B', '#0033AB', '#285ED5', '#5888EC', '#8BB0F8', '#BED4FD', '#EEF5FF'];
var graduatedBrandPaletteAccentTwo = ['#612800', '#BC5100', '#FF7602', '#FF9A3F', '#FFBB7D', '#FFD9B7', '#FFF2EB'];
var graduatedBrandPaletteAccentThree = ['#590013', '#A4082A', '#D63A5B', '#ED5F7D', '#FA8FA6', '#FFC4D0', '#FFEEF2'];
var graduatedBrandPaletteAccentAltOne = ['#001C5E', '#0138BB', '#2D6BFF', '#6298FF', '#96BFFF', '#C5DEFF', '#EEF5FF'];
var graduatedBrandPaletteAccentAltTwo = ['#00403D', '#14807A', '#53B8B3', '#7CD9D1', '#A3EDE4', '#C8F7F0', '#E8FAF7',];


// Rotor Collins Color Palettes
var collinsBrandPalette = ['#E4551F', '#2D6BFF', '#F2A900',' #00AB8E'];
var collinsGraduatedBrandPaletteAccentOne = ['#592616', '#AB4421', '#E4551F', '#F98651', '#FFB185', '#FFD5B7', '#FFF1E6'];
var collinsGraduatedBrandPaletteAccentTwo = ['#004035', '#007561', '#00AB8E', '#45D4B7', '#83EFD7', '#B6FDEB', '#DEFFF6'];
var collinsGraduatedBrandPaletteAccentThree = ['#593100', '#8C5500', '#C27F00', '#F2A900', '#F6C25A', '#FBDBA5', '#FFF4E4'];
var collinsGraduatedBrandPaletteAccentAltOne = ['#001C5E', '#0138BB', '#2D6BFF', '#6298FF', '#96BFFF', '#C5DEFF', '#EEF5FF'];
var collinsGraduatedBrandPaletteAccentAltTwo = ['#00403D', '#14807A', '#53B8B3', '#7CD9D1', '#A3EDE4', '#C8F7F0', '#E8FAF7',];

// Rotor P&W Color Palettes
var prattBrandPalette = ['#F2CD00', '#00A9E0', '#994878',' #A89968','#BABBB1','#2D6BFF','#53B8B3',];
var prattGraduatedBrandPaletteAccentOne = ['#402100', '#724900', '#A57A00', '#D2A900', '#F2CD00', '#FEE266', '#FFF4CB'];
var prattGraduatedBrandPaletteAccentTwo = ['#003357', '#00689B', '#00A9E0', '#54CCF7', '#98E5FF', '#CBF3FF', '#F0F7FA'];
var prattGraduatedBrandPaletteAccentThree = ['#4D0B35', '#762457', '#994878', '#C1729F', '#DD9EBF', '#F0C8DC', '#FCF1F6'];
var prattGraduatedBrandPaletteAccentAltOne = ['#001C5E', '#0138BB', '#2D6BFF', '#6298FF', '#96BFFF', '#C5DEFF', '#EEF5FF'];
var prattGraduatedBrandPaletteAccentAltTwo = ['#00403D', '#14807A', '#53B8B3', '#7CD9D1', '#A3EDE4', '#C8F7F0', '#E8FAF7',];

// Rotor Otis Color Palettes --NEEDS UPDATED COLORS
var otisBrandPalette = ['#CBA052', '#F65275', '#0033A0','#2D6BFF', '#9E978E'];
var otisGraduatedBrandPaletteAccentOne = ['#362200', '#724A03', '#A6751E', '#CBA052', '#E4C181', '#F3DCB0', '#FAF1DE'];
var otisGraduatedBrandPaletteAccentTwo = ['#590013', '#A60024', '#D9244B', '#F65275', '#FF87A1', '#FFBBCA', '#FFEBEF'];
var otisGraduatedBrandPaletteAccentThree = ['#00226B', '#0033A0', '#265ECC', '#5688E5', '#89B0F3', '#BCD4FB', '#EEF5FF'];
var otisGraduatedBrandPaletteAccentAltOne = ['#001C5E', '#0138BB', '#2D6BFF', '#6298FF', '#96BFFF', '#C5DEFF', '#EEF5FF'];
var otisGraduatedBrandPaletteAccentAltTwo = ['#292725', '#504C48', '#77726B', '#9E978E', '#BDB6AD', '#DBD5CC', '#FAF1E6',];



var chart;


// Configuration of the Graph
var option = {
    backgroundColor: '#ffffff',
    color: generalPalette,
    dataset: {
        // Provide data.
        source: [
            ['Month', 'Jul', 'Aug', 'Sep','Oct', 'Nov','Dec', 'Jan', 'Feb', 'Mar', 'Apr', "May", 'Jun',],
            ['One', 720, 932, 901, 834, 760, 932, 801, 934, 820, 732, 901, 840],
            ['Two', 620, 632, 601, 634, 720, 632, 701, 634, 620, 632, 601, 703],
            ['Three', 420, 432, 501, 534, 520, 432, 401, 434, 450, 532, 401, 343],
            ['Four', 520, 532, 301, 334, 320, 532, 501, 534, 550, 332, 301, 450],
            ['Five', 240, 540, 345, 304, 546, 665, 345, 645, 345, 334, 443, 650],
            ['Six', 650, 667, 560, 580,559, 560, 660, 760, 750, 500, 540, 330]
        ]
    },
    xAxis: {
        axisTick: {
          lineStyle: {
            width: 1,
            color: '#A6A6A6',
          },
        },
        axisLine:{
          lineStyle:{
            type: 'solid',
          },
        },
        axisLabel: {
          color: '#666666',
          fontFamily: 'Helvetica',
          fontSize: '12',
          fontWeight: '400',
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#f0f0f0',
                type: 'solid',
            }
        },
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: '#A6A6A6',
          },
        },
        type: 'category',
    },
    yAxis: {
        axisTick: {
          lineStyle: {
            width: 1,
            color: '#A6A6A6',
          },
        },
        axisLabel: {
          show: true,
          color: '#666666',
          fontFamily: 'Helvetica',
          fontSize: '12',
          fontWeight: '400',
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#f0f0f0',
                type: 'solid',
            }
        },
        axisLine: {
          lineStyle: {
            color: '#A6A6A6',
            type:'solid',
          },
        },
        type: 'value'
    },
    toolbox: {
        showTitle: true,
        right: 0,
        bottom: 5,
        feature: {
            saveAsImage: {
              title: 'Save  ',
              type: 'png',
              name: 'Line Chart',
              backgroundColor: '#1F1F1F',
              excludeComponents: ['legend', 'toolbox'],
              iconStyle:{
                borderColor: '#1f1f1f',
                emphasis:{
                  borderColor: '#D63A5B',
                  textPosition: 'left',
                  textAlign: 'right',
                },
              },
            },
            //dataView: {readOnly: false},
        }
    },
    grid: {
      right: 16,
      top: 16,
      left: 45,
      show: true,
      borderColor: '#f0f0f0',
    },
    legend: {
      inactiveColor: '#D1D1D1',
      itemWidth: 8,
      itemHeight: 8,
      top: -5,
      left: 0,
      textStyle: {
        color: '#666666',
        fontFamily: 'Helvetica',
        fontSize: 10,
      },
    },
    series: [

      {

        seriesLayoutBy: 'row',
        areaStyle: {
            opacity:0,
        },
        radius: ['55%', '80%'],
        label:{
          show: false,
          position: 'outside',
          color: '#666666',
          fontWeight: 'lighter',
        },
        labelLine: {
          show: false,
          length: 8,
          length2: 8,
                lineStyle:{
                  color: '#666666',
                  fontSize: 12,
                },
            },
            itemStyle: {
              barBorderColor: '#ffffff',
              barBorderWidth: 0,
              borderColor: '#ffffff',
              borderWidth: 1,
            },
        barCategoryGap: '60%',
        barGap: '20%',
        name: "One",
        //data: datasetOne,
        type: 'line',
        stack: 'one',
        showSymbol: false,
         lineStyle:{
          width: 2,
        },
      },
      {
        seriesLayoutBy: 'row',
        areaStyle: {
            opacity:0,
        },
        radius: ['55%', '80%'],
        label:{
          show: false,
          position: 'outside',
          color: '#666666',
          fontWeight: 'lighter',
        },
        labelLine: {
          length: 8,
          length2: 8,
          show: false,
                lineStyle:{
                  color: '#666666',
                  fontSize: 12,
                },
            },
            itemStyle: {
              barBorderColor: '#ffffff',
              barBorderWidth: 0,
              borderColor: '#ffffff',
              borderWidth: 1,
            },
            barCategoryGap: '60%',
            barGap: '20%',
        name: "Two",
        //data: datasetTwo,
        type: 'line',
        stack: 'two',
        showSymbol: false,
        lineStyle:{
          width: 2,
        },
      },
      {
        seriesLayoutBy: 'row',
        areaStyle: {
            opacity:0,
        },
        radius: ['55%', '80%'],
        label:{
          show: false,
          position: 'outside',
          color: '#666666',
          fontWeight: 'lighter',
          fontSize: 12,
        },
        labelLine: {
          length: 8,
          length2: 8,
          show: false,
                lineStyle:{
                  color: '#666666',
                },
            },
            itemStyle: {
              barBorderColor: '#ffffff',
              barBorderWidth: 0,
              borderColor: '#ffffff',
              borderWidth: 1,
            },
        name: "Three",
        //data: datasetThree,
        type: 'line',
        stack: 'three',
        showSymbol: false,
        lineStyle:{
          width: 2,
        },
      },
      {
        seriesLayoutBy: 'row',
        areaStyle: {
            opacity:0,
        },
        radius: ['55%', '80%'],
        label:{
          show: false,
          position: 'outside',
          color: '#666666',
          fontWeight: 'lighter',
          fontSize: 12,
        },
        labelLine: {
          length: 8,
          length2: 8,
          show: false,
                lineStyle:{
                  color: '#666666',
                },
            },
            itemStyle: {
              barBorderColor: '#ffffff',
              barBorderWidth: 0,
              borderColor: '#ffffff',
              borderWidth: 1,
            },
        name: "Four",
        //data: datasetFour,
        type: 'line',
        stack: 'four',
        showSymbol: false,
        lineStyle:{
          width: 2,
        },
      },
      {
        seriesLayoutBy: 'row',
        areaStyle: {
            opacity:0,
        },
        radius: ['55%', '80%'],
        label:{
          show: false,
          position: 'outside',
          color: '#666666',
          fontWeight: 'lighter',
          fontSize: 12,
        },
        labelLine: {
          length: 8,
          length2: 8,
          show: false,
                lineStyle:{
                  color: '#666666',
                },
            },
            itemStyle: {
              barBorderColor: '#ffffff',
              barBorderWidth: 0,
              borderColor: '#ffffff',
              borderWidth: 1,
            },
        name: "Five",
       // data: datasetFive,
        type: 'line',
        stack: 'five',
        showSymbol: false,
        lineStyle:{
          width: 2,
        },
      },
      {
        seriesLayoutBy: 'row',
        areaStyle: {
            opacity:0,
        },
        radius: ['55%', '80%'],
        label:{
          show: false,
          position: 'outside',
          color: '#666666',
          fontWeight: 'lighter',
          fontSize: 12,
        },
        labelLine: {
          length: 8,
          length2: 8,
          show: false,
                lineStyle:{
                  color: '#666666',
                },
            },
           itemStyle: {
              barBorderColor: '#ffffff',
              barBorderWidth: 0,
              borderColor: '#ffffff',
              borderWidth: 1,
           },
        name: "Six",
        //data: datasetSix,
        type: 'line',
        stack: 'six',
        showSymbol: false,
        lineStyle:{
          width: 2,
        },
      },
     ],
};




//*****************************//
//*** Interactive Functions ***//
//*****************************//

//Change THEME
$('#chartTheme').change(function(){
  var value = $(this).val();
  if (value == 'rotorCore'){
    //change font family
    option.xAxis.axisLabel.fontFamily = 'Helvetica';
    option.yAxis.axisLabel.fontFamily = 'Helvetica';
    option.legend.textStyle.fontFamily = 'Helvetica';
    //Set color palette to brand palette
    option.color = generalPalette;
    $("#colorPalette option[value='generalPalette']").attr('selected', 'selected');
    //change value of option
    $("#colorPalette option[value='collinsBrandPalette']").val('brandPalette');
    $("#colorPalette option[value='collinsGraduatedBrandPaletteAccentTwo']").val('graduatedBrandPaletteAccentTwo');
    $("#colorPalette option[value='collinsGraduatedBrandPaletteAccentThree']").val('graduatedBrandPaletteAccentThree');
    $("#colorPalette option[value='collinsGraduatedBrandPaletteAccentAltOne']").val('graduatedBrandPaletteAccentAltOne');
    $("#colorPalette option[value='collinsGraduatedBrandPaletteAccentAltTwo']").val('graduatedBrandPaletteAccentAltTwo');
    $("#colorPalette option[value='prattBrandPalette']").val('brandPalette');
    $("#colorPalette option[value='prattGraduatedBrandPaletteAccentOne']").val('graduatedBrandPaletteAccentOne');
    $("#colorPalette option[value='prattGraduatedBrandPaletteAccentTwo']").val('graduatedBrandPaletteAccentTwo');
    $("#colorPalette option[value='prattGraduatedBrandPaletteAccentThree']").val('graduatedBrandPaletteAccentThree');
    $("#colorPalette option[value='prattGraduatedBrandPaletteAccentAltOne']").val('graduatedBrandPaletteAccentAltOne');
    $("#colorPalette option[value='prattGraduatedBrandPaletteAccentAltTwo']").val('graduatedBrandPaletteAccentAltTwo');
    $("#colorPalette option[value='otisBrandPalette']").val('brandPalette');
    $("#colorPalette option[value='otisGraduatedBrandPaletteAccentOne']").val('graduatedBrandPaletteAccentOne');
    $("#colorPalette option[value='otisGraduatedBrandPaletteAccentTwo']").val('graduatedBrandPaletteAccentTwo');
    $("#colorPalette option[value='otisGraduatedBrandPaletteAccentThree']").val('graduatedBrandPaletteAccentThree');
    $("#colorPalette option[value='otisGraduatedBrandPaletteAccentAltOne']").val('graduatedBrandPaletteAccentAltOne');
    $("#colorPalette option[value='otisGraduatedBrandPaletteAccentAltTwo']").val('graduatedBrandPaletteAccentAltTwo');
    //change value of option for surface color
    $("#chartMode option[value='#141B2C']").val('#1f1f1f');
    $("#chartMode option[value='#090D15']").val('#000000');
    $("#chartMode option[value='#041E42']").val('#1f1f1f');
    $("#chartMode option[value='#021227']").val('#000000');
  }else if (value == 'rotorCollins'){
    //change font family
    option.xAxis.axisLabel.fontFamily = 'IBM Plex Sans';
    option.yAxis.axisLabel.fontFamily = 'IBM Plex Sans';
    option.legend.textStyle.fontFamily = 'IBM Plex Sans';
    //Set color palette to brand palette
    option.color = generalPalette;
    $("#colorPalette option[value='generalPalette']").attr('selected', 'selected');
    //change value of option
    $("#colorPalette option[value='brandPalette']").val('collinsBrandPalette');
    $("#colorPalette option[value='graduatedBrandPaletteAccentOne']").val('collinsGraduatedBrandPaletteAccentOne');
    $("#colorPalette option[value='graduatedBrandPaletteAccentTwo']").val('collinsGraduatedBrandPaletteAccentTwo');
    $("#colorPalette option[value='graduatedBrandPaletteAccentThree']").val('collinsGraduatedBrandPaletteAccentThree');
    $("#colorPalette option[value='graduatedBrandPaletteAccentAltOne']").val('collinsGraduatedBrandPaletteAccentAltOne');
    $("#colorPalette option[value='graduatedBrandPaletteAccentAltTwo']").val('collinsGraduatedBrandPaletteAccentAltTwo');
    $("#colorPalette option[value='prattBrandPalette']").val('collinsBrandPalette');
    $("#colorPalette option[value='prattGraduatedBrandPaletteAccentOne']").val('collinsGraduatedBrandPaletteAccentOne');
    $("#colorPalette option[value='prattGraduatedBrandPaletteAccentTwo']").val('collinsGraduatedBrandPaletteAccentTwo');
    $("#colorPalette option[value='prattGraduatedBrandPaletteAccentThree']").val('collinsGraduatedBrandPaletteAccentThree');
    $("#colorPalette option[value='prattGraduatedBrandPaletteAccentAltOne']").val('collinsGraduatedBrandPaletteAccentAltOne');
    $("#colorPalette option[value='prattGraduatedBrandPaletteAccentAltTwo']").val('collinsGraduatedBrandPaletteAccentAltTwo');
    $("#colorPalette option[value='otisBrandPalette']").val('collinsBrandPalette');
    $("#colorPalette option[value='otisGraduatedBrandPaletteAccentOne']").val('collinsGraduatedBrandPaletteAccentOne');
    $("#colorPalette option[value='otisGraduatedBrandPaletteAccentTwo']").val('collinsGraduatedBrandPaletteAccentTwo');
    $("#colorPalette option[value='otisGraduatedBrandPaletteAccentThree']").val('collinsGraduatedBrandPaletteAccentThree');
    $("#colorPalette option[value='otisGraduatedBrandPaletteAccentAltOne']").val('collinsGraduatedBrandPaletteAccentAltOne');
    $("#colorPalette option[value='otisGraduatedBrandPaletteAccentAltTwo']").val('collinsGraduatedBrandPaletteAccentAltTwo');
    //change value of option for surface color
    $("#chartMode option[value='#141B2C']").val('#1f1f1f');
    $("#chartMode option[value='#090D15']").val('#000000');
    $("#chartMode option[value='#041E42']").val('#1f1f1f');
    $("#chartMode option[value='#021227']").val('#000000');
  }else if (value == 'rotorPW'){
    //change font family
    option.xAxis.axisLabel.fontFamily = 'Inter';
    option.yAxis.axisLabel.fontFamily = 'Inter';
    option.legend.textStyle.fontFamily = 'Inter';
    //Set color palette to brand palette
    option.color = generalPalette;
    $("#colorPalette option[value='generalPalette']").attr('selected', 'selected');
    //change value of option
    $("#colorPalette option[value='brandPalette']").val('prattBrandPalette');
    $("#colorPalette option[value='graduatedBrandPaletteAccentOne']").val('prattGraduatedBrandPaletteAccentOne');
    $("#colorPalette option[value='graduatedBrandPaletteAccentTwo']").val('prattGraduatedBrandPaletteAccentTwo');
    $("#colorPalette option[value='graduatedBrandPaletteAccentThree']").val('prattGraduatedBrandPaletteAccentThree');
    $("#colorPalette option[value='graduatedBrandPaletteAccentAltOne']").val('prattGraduatedBrandPaletteAccentAltOne');
    $("#colorPalette option[value='graduatedBrandPaletteAccentAltTwo']").val('prattGraduatedBrandPaletteAccentAltTwo');
    $("#colorPalette option[value='collinsBrandPalette']").val('prattBrandPalette');
    $("#colorPalette option[value='collinsGraduatedBrandPaletteAccentOne']").val('prattGraduatedBrandPaletteAccentOne');
    $("#colorPalette option[value='collinsGraduatedBrandPaletteAccentTwo']").val('prattGraduatedBrandPaletteAccentTwo');
    $("#colorPalette option[value='collinsGraduatedBrandPaletteAccentThree']").val('prattGraduatedBrandPaletteAccentThree');
    $("#colorPalette option[value='collinsGraduatedBrandPaletteAccentAltOne']").val('prattGraduatedBrandPaletteAccentAltOne');
    $("#colorPalette option[value='collinsGraduatedBrandPaletteAccentAltTwo']").val('prattGraduatedBrandPaletteAccentAltTwo');
    $("#colorPalette option[value='otisBrandPalette']").val('prattBrandPalette');
    $("#colorPalette option[value='otisGraduatedBrandPaletteAccentOne']").val('prattGraduatedBrandPaletteAccentOne');
    $("#colorPalette option[value='otisGraduatedBrandPaletteAccentTwo']").val('prattGraduatedBrandPaletteAccentTwo');
    $("#colorPalette option[value='otisGraduatedBrandPaletteAccentThree']").val('prattGraduatedBrandPaletteAccentThree');
    $("#colorPalette option[value='otisGraduatedBrandPaletteAccentAltOne']").val('prattGraduatedBrandPaletteAccentAltOne');
    $("#colorPalette option[value='otisGraduatedBrandPaletteAccentAltTwo']").val('prattGraduatedBrandPaletteAccentAltTwo');
    //change value of option for surface color
    $("#chartMode option[value='#1f1f1f']").val('#141B2C');
    $("#chartMode option[value='#000000']").val('#090D15');
    $("#chartMode option[value='#041E42']").val('#141B2C');
    $("#chartMode option[value='#021227']").val('#090D15');
  }else if (value == 'rotorOtis'){
    //change font family --NEEDS UPDATED VALUE
    option.xAxis.axisLabel.fontFamily = 'Nunito Sans';
    option.yAxis.axisLabel.fontFamily = 'Nunito Sans';
    option.legend.textStyle.fontFamily = 'Nunito Sans';
    //Set color palette to brand palette
    option.color = generalPalette;
    $("#colorPalette option[value='generalPalette']").attr('selected', 'selected');
    //change value of option
    $("#colorPalette option[value='brandPalette']").val('otisBrandPalette');
    $("#colorPalette option[value='graduatedBrandPaletteAccentOne']").val('otisGraduatedBrandPaletteAccentOne');
    $("#colorPalette option[value='graduatedBrandPaletteAccentTwo']").val('otisGraduatedBrandPaletteAccentTwo');
    $("#colorPalette option[value='graduatedBrandPaletteAccentThree']").val('otisGraduatedBrandPaletteAccentThree');
    $("#colorPalette option[value='graduatedBrandPaletteAccentAltOne']").val('otisGraduatedBrandPaletteAccentAltOne');
    $("#colorPalette option[value='graduatedBrandPaletteAccentAltTwo']").val('otisGraduatedBrandPaletteAccentAltTwo');
    $("#colorPalette option[value='collinsBrandPalette']").val('otisBrandPalette');
    $("#colorPalette option[value='collinsGraduatedBrandPaletteAccentOne']").val('otisGraduatedBrandPaletteAccentOne');
    $("#colorPalette option[value='collinsGraduatedBrandPaletteAccentTwo']").val('otisGraduatedBrandPaletteAccentTwo');
    $("#colorPalette option[value='collinsGraduatedBrandPaletteAccentThree']").val('otisGraduatedBrandPaletteAccentThree');
    $("#colorPalette option[value='collinsGraduatedBrandPaletteAccentAltOne']").val('otisGraduatedBrandPaletteAccentAltOne');
    $("#colorPalette option[value='collinsGraduatedBrandPaletteAccentAltTwo']").val('otisGraduatedBrandPaletteAccentAltTwo');
    $("#colorPalette option[value='prattBrandPalette']").val('otisBrandPalette');
    $("#colorPalette option[value='prattGraduatedBrandPaletteAccentOne']").val('otisGraduatedBrandPaletteAccentOne');
    $("#colorPalette option[value='prattGraduatedBrandPaletteAccentTwo']").val('otisGraduatedBrandPaletteAccentTwo');
    $("#colorPalette option[value='prattGraduatedBrandPaletteAccentThree']").val('otisGraduatedBrandPaletteAccentThree');
    $("#colorPalette option[value='prattGraduatedBrandPaletteAccentAltOne']").val('otisGraduatedBrandPaletteAccentAltOne');
    $("#colorPalette option[value='prattGraduatedBrandPaletteAccentAltTwo']").val('otisGraduatedBrandPaletteAccentAltTwo');
    //change value of option for surface color
    $("#chartMode option[value='#1f1f1f']").val('#141B2C');
    $("#chartMode option[value='#000000']").val('#090D15');
    $("#chartMode option[value='#141B2C']").val('#041E42');
    $("#chartMode option[value='#090D15']").val('#021227');
  }else{}
});


// Change the Mode
$('#chartMode').change(function(){
  var value = $(this).val();
  //option.backgroundColor = value;
  //$('#main').css('background-color', value);
  if (value == 'coreLight') { // White Core Theme
    option.backgroundColor = '#ffffff';
    $('#main').css('background-color', '#ffffff');
    $('body').css('background-color', '#e8e8e8');
    option.xAxis.axisLabel.color = "#666666";
    option.yAxis.axisLabel.color = "#666666";
    option.xAxis.axisTick.lineStyle.color = '#A6A6A6';
    option.yAxis.axisTick.lineStyle.color = '#A6A6A6';
    option.xAxis.splitLine.lineStyle.color = '#f0f0f0';
    option.yAxis.splitLine.lineStyle.color = '#f0f0f0';
    option.xAxis.axisLine.lineStyle.color = '#A6A6A6';
    option.yAxis.axisLine.lineStyle.color = '#A6A6A6';
    option.grid.borderColor = '#f0f0f0';
    option.toolbox.feature.saveAsImage.iconStyle.borderColor = '#1f1f1f';
    option.legend.textStyle.color = '#666666';
    option.series[0].label.color = '#666666';
    option.series[1].label.color = '#666666';
    option.series[2].label.color = '#666666';
    option.series[3].label.color = '#666666';
    option.series[4].label.color = '#666666';
    option.series[5].label.color = '#666666';
    option.series[0].labelLine.lineStyle.color = '#666666';
    option.series[1].labelLine.lineStyle.color = '#666666';
    option.series[2].labelLine.lineStyle.color = '#666666';
    option.series[3].labelLine.lineStyle.color = '#666666';
    option.series[4].labelLine.lineStyle.color = '#666666';
    option.series[5].labelLine.lineStyle.color = '#666666';
    option.series[0].itemStyle.borderColor = '#FFFFFF';
    option.series[1].itemStyle.borderColor = '#FFFFFF';
    option.series[2].itemStyle.borderColor = '#FFFFFF';
    option.series[3].itemStyle.borderColor = '#FFFFFF';
    option.series[4].itemStyle.borderColor = '#FFFFFF';
    option.series[5].itemStyle.borderColor = '#FFFFFF';
    option.series[0].itemStyle.barBorderColor = '#FFFFFF';
    option.series[1].itemStyle.barBorderColor = '#FFFFFF';
    option.series[2].itemStyle.barBorderColor = '#FFFFFF';
    option.series[3].itemStyle.barBorderColor = '#FFFFFF';
    option.series[4].itemStyle.barBorderColor = '#FFFFFF';
    option.series[5].itemStyle.barBorderColor = '#FFFFFF';
  }else if(value == '#1f1f1f'){ // Core and Collins Gray 900
    option.backgroundColor = '#1f1f1f';
    $('body').css('background-color', '#000000');
    $('#main').css('background-color', '#1f1f1f');
    option.xAxis.axisLabel.color = "#D1D1D1";
    option.yAxis.axisLabel.color = "#D1D1D1";
    option.xAxis.axisTick.lineStyle.color = '#8C8C8C';
    option.yAxis.axisTick.lineStyle.color = '#8C8C8C';
    option.xAxis.splitLine.lineStyle.color = '#333333';
    option.yAxis.splitLine.lineStyle.color = '#333333';
    option.xAxis.axisLine.lineStyle.color = '#8C8C8C';
    option.yAxis.axisLine.lineStyle.color = '#8C8C8C';
    option.grid.borderColor = '#333333';
    option.toolbox.feature.saveAsImage.iconStyle.borderColor = '#ffffff';
    option.legend.textStyle.color = '#E8E8E8';
    option.series[0].label.color = '#D1D1D1';
    option.series[1].label.color = '#D1D1D1';
    option.series[2].label.color = '#D1D1D1';
    option.series[3].label.color = '#D1D1D1';
    option.series[4].label.color = '#D1D1D1';
    option.series[5].label.color = '#D1D1D1';
    option.series[0].labelLine.lineStyle.color = '#D1D1D1';
    option.series[1].labelLine.lineStyle.color = '#D1D1D1';
    option.series[2].labelLine.lineStyle.color = '#D1D1D1';
    option.series[3].labelLine.lineStyle.color = '#D1D1D1';
    option.series[4].labelLine.lineStyle.color = '#D1D1D1';
    option.series[5].labelLine.lineStyle.color = '#D1D1D1';
    option.series[0].itemStyle.borderColor = '#1f1f1f';
    option.series[1].itemStyle.borderColor = '#1f1f1f';
    option.series[2].itemStyle.borderColor = '#1f1f1f';
    option.series[3].itemStyle.borderColor = '#1f1f1f';
    option.series[4].itemStyle.borderColor = '#1f1f1f';
    option.series[5].itemStyle.borderColor = '#1f1f1f';
    option.series[0].itemStyle.barBorderColor = '#1f1f1f';
    option.series[1].itemStyle.barBorderColor = '#1f1f1f';
    option.series[2].itemStyle.barBorderColor = '#1f1f1f';
    option.series[3].itemStyle.barBorderColor = '#1f1f1f';
    option.series[4].itemStyle.barBorderColor = '#1f1f1f';
    option.series[5].itemStyle.barBorderColor = '#1f1f1f';
  }else if(value == '#041E42'){ //Otis Gray 900
    option.backgroundColor = '#041E42';
    $('body').css('background-color', '#021227');
    $('#main').css('background-color', '#041E42');
    option.xAxis.axisLabel.color = "#CCD2D9";
    option.yAxis.axisLabel.color = "#CCD2D9";
    option.xAxis.axisTick.lineStyle.color = '#8C8C8C';
    option.yAxis.axisTick.lineStyle.color = '#8C8C8C';
    option.xAxis.splitLine.lineStyle.color = '#172F50';
    option.yAxis.splitLine.lineStyle.color = '#172F50';
    option.xAxis.axisLine.lineStyle.color = '#8C8C8C';
    option.yAxis.axisLine.lineStyle.color = '#8C8C8C';
    option.grid.borderColor = '#172F50';
    option.toolbox.feature.saveAsImage.iconStyle.borderColor = '#ffffff';
    option.legend.textStyle.color = '#E0E3E8';
    option.series[0].label.color = '#CCD2D9';
    option.series[1].label.color = '#CCD2D9';
    option.series[2].label.color = '#CCD2D9';
    option.series[3].label.color = '#CCD2D9';
    option.series[4].label.color = '#CCD2D9';
    option.series[5].label.color = '#CCD2D9';
    option.series[0].labelLine.lineStyle.color = '#CCD2D9';
    option.series[1].labelLine.lineStyle.color = '#CCD2D9';
    option.series[2].labelLine.lineStyle.color = '#CCD2D9';
    option.series[3].labelLine.lineStyle.color = '#CCD2D9';
    option.series[4].labelLine.lineStyle.color = '#CCD2D9';
    option.series[5].labelLine.lineStyle.color = '#CCD2D9';
    option.series[0].itemStyle.borderColor = '#041E42';
    option.series[1].itemStyle.borderColor = '#041E42';
    option.series[2].itemStyle.borderColor = '#041E42';
    option.series[3].itemStyle.borderColor = '#041E42';
    option.series[4].itemStyle.borderColor = '#041E42';
    option.series[5].itemStyle.borderColor = '#041E42';
    option.series[0].itemStyle.barBorderColor = '#041E42';
    option.series[1].itemStyle.barBorderColor = '#041E42';
    option.series[2].itemStyle.barBorderColor = '#041E42';
    option.series[3].itemStyle.barBorderColor = '#041E42';
    option.series[4].itemStyle.barBorderColor = '#041E42';
    option.series[5].itemStyle.barBorderColor = '#041E42';
  }else if(value == '#141B2C'){ //Pratt gray 900
    option.backgroundColor = '#141B2C';
    $('body').css('background-color', '#090D15');
    $('#main').css('background-color', '#141B2C');
    option.xAxis.axisLabel.color = "#CFD1D7";
    option.yAxis.axisLabel.color = "#CFD1D7";
    option.xAxis.axisTick.lineStyle.color = '#8C8C8C';
    option.yAxis.axisTick.lineStyle.color = '#8C8C8C';
    option.xAxis.splitLine.lineStyle.color = '#1F2A44';
    option.yAxis.splitLine.lineStyle.color = '#1F2A44';
    option.xAxis.axisLine.lineStyle.color = '#8C8C8C';
    option.yAxis.axisLine.lineStyle.color = '#8C8C8C';
    option.grid.borderColor = '#1F2A44';
    option.toolbox.feature.saveAsImage.iconStyle.borderColor = '#ffffff';
    option.legend.textStyle.color = '#E3E5E8';
    option.series[0].label.color = '#CFD1D7';
    option.series[1].label.color = '#CFD1D7';
    option.series[2].label.color = '#CFD1D7';
    option.series[3].label.color = '#CFD1D7';
    option.series[4].label.color = '#CFD1D7';
    option.series[5].label.color = '#CFD1D7';
    option.series[0].labelLine.lineStyle.color = '#CFD1D7';
    option.series[1].labelLine.lineStyle.color = '#CFD1D7';
    option.series[2].labelLine.lineStyle.color = '#CFD1D7';
    option.series[3].labelLine.lineStyle.color = '#CFD1D7';
    option.series[4].labelLine.lineStyle.color = '#CFD1D7';
    option.series[5].labelLine.lineStyle.color = '#CFD1D7';
    option.series[0].itemStyle.borderColor = '#141B2C';
    option.series[1].itemStyle.borderColor = '#141B2C';
    option.series[2].itemStyle.borderColor = '#141B2C';
    option.series[3].itemStyle.borderColor = '#141B2C';
    option.series[4].itemStyle.borderColor = '#141B2C';
    option.series[5].itemStyle.borderColor = '#141B2C';
    option.series[0].itemStyle.barBorderColor = '#141B2C';
    option.series[1].itemStyle.barBorderColor = '#141B2C';
    option.series[2].itemStyle.barBorderColor = '#141B2C';
    option.series[3].itemStyle.barBorderColor = '#141B2C';
    option.series[4].itemStyle.barBorderColor = '#141B2C';
    option.series[5].itemStyle.barBorderColor = '#141B2C';
  }else if(value == '#000000'){ //Core and Collins Black
    option.backgroundColor = '#000000';
    $('body').css('background-color', '#000000');
    $('#main').css('background-color', '#000000');
    $('#main').css('border', '1px solid #1f1f1f');
    option.xAxis.axisLabel.color = "#D1D1D1";
    option.yAxis.axisLabel.color = "#D1D1D1";
    option.xAxis.axisTick.lineStyle.color = '#8C8C8C';
    option.yAxis.axisTick.lineStyle.color = '#8C8C8C';
    option.xAxis.splitLine.lineStyle.color = '#333333';
    option.yAxis.splitLine.lineStyle.color = '#333333';
    option.xAxis.axisLine.lineStyle.color = '#8C8C8C';
    option.yAxis.axisLine.lineStyle.color = '#8C8C8C';
    option.grid.borderColor = '#333333';
    option.toolbox.feature.saveAsImage.iconStyle.borderColor = '#ffffff';
    option.legend.textStyle.color = '#E8E8E8';
    option.series[0].label.color = '#D1D1D1';
    option.series[1].label.color = '#D1D1D1';
    option.series[2].label.color = '#D1D1D1';
    option.series[3].label.color = '#D1D1D1';
    option.series[4].label.color = '#D1D1D1';
    option.series[5].label.color = '#D1D1D1';
    option.series[0].labelLine.lineStyle.color = '#D1D1D1';
    option.series[1].labelLine.lineStyle.color = '#D1D1D1';
    option.series[2].labelLine.lineStyle.color = '#D1D1D1';
    option.series[3].labelLine.lineStyle.color = '#D1D1D1';
    option.series[4].labelLine.lineStyle.color = '#D1D1D1';
    option.series[5].labelLine.lineStyle.color = '#D1D1D1';
    option.series[0].itemStyle.borderColor = '#000000';
    option.series[1].itemStyle.borderColor = '#000000';
    option.series[2].itemStyle.borderColor = '#000000';
    option.series[3].itemStyle.borderColor = '#000000';
    option.series[4].itemStyle.borderColor = '#000000';
    option.series[5].itemStyle.borderColor = '#000000';
    option.series[0].itemStyle.barBorderColor = '#000000';
    option.series[1].itemStyle.barBorderColor = '#000000';
    option.series[2].itemStyle.barBorderColor = '#000000';
    option.series[3].itemStyle.barBorderColor = '#000000';
    option.series[4].itemStyle.barBorderColor = '#000000';
    option.series[5].itemStyle.barBorderColor = '#000000';
  }else if(value == '#021227'){ //Otis Black
    option.backgroundColor = '#021227';
    $('body').css('background-color', '#021227');
    $('#main').css('background-color', '#021227');
    $('#main').css('border', '1px solid #041E42');
    option.xAxis.axisLabel.color = "#CCD2D9";
    option.yAxis.axisLabel.color = "#CCD2D9";
    option.xAxis.axisTick.lineStyle.color = '#8C8C8C';
    option.yAxis.axisTick.lineStyle.color = '#8C8C8C';
    option.xAxis.splitLine.lineStyle.color = '#172F50';
    option.yAxis.splitLine.lineStyle.color = '#172F50';
    option.xAxis.axisLine.lineStyle.color = '#8C8C8C';
    option.yAxis.axisLine.lineStyle.color = '#8C8C8C';
    option.grid.borderColor = '#172F50';
    option.toolbox.feature.saveAsImage.iconStyle.borderColor = '#ffffff';
    option.legend.textStyle.color = '#E0E3E8';
    option.series[0].label.color = '#CCD2D9';
    option.series[1].label.color = '#CCD2D9';
    option.series[2].label.color = '#CCD2D9';
    option.series[3].label.color = '#CCD2D9';
    option.series[4].label.color = '#CCD2D9';
    option.series[5].label.color = '#CCD2D9';
    option.series[0].labelLine.lineStyle.color = '#CCD2D9';
    option.series[1].labelLine.lineStyle.color = '#CCD2D9';
    option.series[2].labelLine.lineStyle.color = '#CCD2D9';
    option.series[3].labelLine.lineStyle.color = '#CCD2D9';
    option.series[4].labelLine.lineStyle.color = '#CCD2D9';
    option.series[5].labelLine.lineStyle.color = '#CCD2D9';
    option.series[0].itemStyle.borderColor = '#021227';
    option.series[1].itemStyle.borderColor = '#021227';
    option.series[2].itemStyle.borderColor = '#021227';
    option.series[3].itemStyle.borderColor = '#021227';
    option.series[4].itemStyle.borderColor = '#021227';
    option.series[5].itemStyle.borderColor = '#021227';
    option.series[0].itemStyle.barBorderColor = '#021227';
    option.series[1].itemStyle.barBorderColor = '#021227';
    option.series[2].itemStyle.barBorderColor = '#021227';
    option.series[3].itemStyle.barBorderColor = '#021227';
    option.series[4].itemStyle.barBorderColor = '#021227';
    option.series[5].itemStyle.barBorderColor = '#021227';
  }else if(value == '#090D15'){ //Pratt Black
    option.backgroundColor = '#090D15';
    $('body').css('background-color', '#090D15');
    $('#main').css('background-color', '#090D15');
    $('#main').css('border', '1px solid #141B2C');
    option.xAxis.axisLabel.color = "#CFD1D7";
    option.yAxis.axisLabel.color = "#CFD1D7";
    option.xAxis.axisTick.lineStyle.color = '#8C8C8C';
    option.yAxis.axisTick.lineStyle.color = '#8C8C8C';
    option.xAxis.splitLine.lineStyle.color = '#1F2A44';
    option.yAxis.splitLine.lineStyle.color = '#1F2A44';
    option.xAxis.axisLine.lineStyle.color = '#8C8C8C';
    option.yAxis.axisLine.lineStyle.color = '#8C8C8C';
    option.grid.borderColor = '#1F2A44';
    option.toolbox.feature.saveAsImage.iconStyle.borderColor = '#ffffff';
    option.legend.textStyle.color = '#E3E5E8';
    option.series[0].label.color = '#CFD1D7';
    option.series[1].label.color = '#CFD1D7';
    option.series[2].label.color = '#CFD1D7';
    option.series[3].label.color = '#CFD1D7';
    option.series[4].label.color = '#CFD1D7';
    option.series[5].label.color = '#CFD1D7';
    option.series[0].labelLine.lineStyle.color = '#CFD1D7';
    option.series[1].labelLine.lineStyle.color = '#CFD1D7';
    option.series[2].labelLine.lineStyle.color = '#CFD1D7';
    option.series[3].labelLine.lineStyle.color = '#CFD1D7';
    option.series[4].labelLine.lineStyle.color = '#CFD1D7';
    option.series[5].labelLine.lineStyle.color = '#CFD1D7';
    option.series[0].itemStyle.borderColor = '#090D15';
    option.series[1].itemStyle.borderColor = '#090D15';
    option.series[2].itemStyle.borderColor = '#090D15';
    option.series[3].itemStyle.borderColor = '#090D15';
    option.series[4].itemStyle.borderColor = '#090D15';
    option.series[5].itemStyle.borderColor = '#090D15';
    option.series[0].itemStyle.barBorderColor = '#090D15';
    option.series[1].itemStyle.barBorderColor = '#090D15';
    option.series[2].itemStyle.barBorderColor = '#090D15';
    option.series[3].itemStyle.barBorderColor = '#090D15';
    option.series[4].itemStyle.barBorderColor = '#090D15';
    option.series[5].itemStyle.barBorderColor = '#090D15';
  }else{}
});




// Change the Color Palette
$('#colorPalette').change(function(){
  var value = $(this).val();
  if (value == 'graduatedBrandPaletteAccentOne') {
    option.color = graduatedBrandPaletteAccentOne;
  }else if(value == 'brandPalette'){
    option.color = brandPalette;
  }else if(value == 'graduatedBrandPaletteAccentTwo'){
    option.color = graduatedBrandPaletteAccentTwo;
  }else if(value == 'graduatedBrandPaletteAccentThree'){
    option.color = graduatedBrandPaletteAccentThree;
  }else if(value == 'graduatedBrandPaletteAccentAltOne'){
    option.color = graduatedBrandPaletteAccentAltOne;
  }else if(value == 'graduatedBrandPaletteAccentAltTwo'){
    option.color = graduatedBrandPaletteAccentAltTwo;
  }else if(value == 'collinsBrandPalette'){
    option.color = collinsBrandPalette;
  }else if(value == 'collinsGraduatedBrandPaletteAccentOne'){
    option.color = collinsGraduatedBrandPaletteAccentOne;
  }else if(value == 'collinsGraduatedBrandPaletteAccentTwo'){
    option.color = collinsGraduatedBrandPaletteAccentTwo;
  }else if(value == 'collinsGraduatedBrandPaletteAccentThree'){
    option.color = collinsGraduatedBrandPaletteAccentThree;
  }else if(value == 'collinsGraduatedBrandPaletteAccentAltOne'){
    option.color = collinsGraduatedBrandPaletteAccentAltOne;
  }else if(value == 'collinsGraduatedBrandPaletteAccentAltTwo'){
    option.color = collinsGraduatedBrandPaletteAccentAltTwo;
  }else if(value == 'prattBrandPalette'){
    option.color = prattBrandPalette;
  }else if(value == 'prattGraduatedBrandPaletteAccentOne'){
    option.color = prattGraduatedBrandPaletteAccentOne;
  }else if(value == 'prattGraduatedBrandPaletteAccentTwo'){
    option.color = prattGraduatedBrandPaletteAccentTwo;
  }else if(value == 'prattGraduatedBrandPaletteAccentThree'){
    option.color = prattGraduatedBrandPaletteAccentThree;
  }else if(value == 'prattGraduatedBrandPaletteAccentAltOne'){
    option.color = prattGraduatedBrandPaletteAccentAltOne;
  }else if(value == 'prattGraduatedBrandPaletteAccentAltTwo'){
    option.color = prattGraduatedBrandPaletteAccentAltTwo;
  }else if(value == 'otisBrandPalette'){
    option.color = otisBrandPalette;
  }else if(value == 'otisGraduatedBrandPaletteAccentOne'){
    option.color = otisGraduatedBrandPaletteAccentOne;
  }else if(value == 'otisGraduatedBrandPaletteAccentTwo'){
    option.color = otisGraduatedBrandPaletteAccentTwo;
  }else if(value == 'otisGraduatedBrandPaletteAccentThree'){
    option.color = otisGraduatedBrandPaletteAccentThree;
  }else if(value == 'otisGraduatedBrandPaletteAccentAltOne'){
    option.color = otisGraduatedBrandPaletteAccentAltOne;
  }else if(value == 'otisGraduatedBrandPaletteAccentAltTwo'){
    option.color = otisGraduatedBrandPaletteAccentAltTwo;
  }else {
    option.color = generalPalette;
  }
});




// Change the Grid Type
$('#gridType').change(function(){
  var value = $(this).val();
  if (value == 'fullGrid') {
      option.xAxis.splitLine.show = true;
      option.yAxis.splitLine.show = true;
      option.grid.show = true;
  }else if (value == 'horizontalGrid') {
    option.xAxis.splitLine.show = false;
    option.yAxis.splitLine.show = true;
    option.grid.show = true;
  }else if (value == 'verticalGrid') {
    option.xAxis.splitLine.show = true;
    option.yAxis.splitLine.show = false;
    option.grid.show = true;
  }else if (value == 'noGrid') {
    option.xAxis.splitLine.show = false;
    option.yAxis.splitLine.show = false;
    option.grid.show = false;
  }else{}
});


// Change the Graph Type
/*  var value = $(this).val();
  if (value == 'lineChart') {
    lineChart();
    $('#switchHolder').css('display', 'none');
    $('#switchHolderTwo').css('display', 'none');
    $('#gridType').removeAttr('disabled');
  }else if (value == 'areaChart') {
    areaChart();
    $('#switchHolder').css('display', 'none');
    $('#switchHolderTwo').css('display', 'none');
    $('#gridType').removeAttr('disabled');
  }else if (value == 'stackedAreaChart') {
    stackedAreaChart();
    $('#switchHolder').css('display', 'none');
    $('#switchHolderTwo').css('display', 'none');
    $('#gridType').removeAttr('disabled');
  }else if (value == 'columnChart') {
    columnChart();
    $('#switchHolder').css('display', 'none');
    $('#switchHolderTwo').css('display', 'none');
    $('#gridType').removeAttr('disabled');
  }else if (value == 'stackedColumnChart') {
    stackedColumnChart();
    $('#switchHolder').css('display', 'none');
    $('#switchHolderTwo').css('display', 'block');
    $('#gridType').removeAttr('disabled');
  }else if (value == 'barChart') {
    barChart();
    $('#switchHolder').css('display', 'none');
    $('#switchHolderTwo').css('display', 'none');
    $('#gridType').removeAttr('disabled');
  }else if (value == 'stackedBarChart') {
    stackedBarChart();
    $('#switchHolder').css('display', 'none');
    $('#switchHolderTwo').css('display', 'block');
    $('#gridType').removeAttr('disabled');
  }else if (value == 'columnLineChart') {
    columnLineChart();
    $('#switchHolder').css('display', 'none');
    $('#switchHolderTwo').css('display', 'none');
    $('#gridType').removeAttr('disabled');
  }else if (value == 'scatterChart') {
    scatterPlot();
    $('#switchHolder').css('display', 'none');
    $('#switchHolderTwo').css('display', 'none');
    $('#gridType').removeAttr('disabled');
  }else if (value == 'pieChart') {
    pieChart();
    $('#switchHolder').css('display', 'block');
    $('#switchHolderTwo').css('display', 'none');
    $('#gridType').attr('disabled', 'disabled');
  }else if (value == 'donutChart') {
    donutChart();
    $('#switchHolder').css('display', 'block');
    $('#switchHolderTwo').css('display', 'none');
    $('#gridType').attr('disabled', 'disabled');
  }else if (value == 'thinDonutChart') {
    thinDonutChart();
    $('#switchHolder').css('display', 'block');
    $('#switchHolderTwo').css('display', 'none');
    $('#gridType').attr('disabled', 'disabled');
  }else{}
});*/

var x = 'Chart Type';
function graphTypePicker(graphType) {
  document.getElementById("inputText").value = graphType;
  $('#selectModal').css('visibility','hidden');
  x = document.getElementById("inputText").value;
  if (x == 'Line Chart'){
    lineChart();
    $('#switchHolder').css('display', 'none');
    $('#switchHolderTwo').css('display', 'none');
    $('#gridType').removeAttr('disabled');
  }else if(x == "Area Chart"){
    areaChart();
    $('#switchHolder').css('display', 'none');
    $('#switchHolderTwo').css('display', 'none');
    $('#gridType').removeAttr('disabled');
  }else if(x == "Stacked Area Chart"){
    stackedAreaChart();
    $('#switchHolder').css('display', 'none');
    $('#switchHolderTwo').css('display', 'none');
    $('#gridType').removeAttr('disabled');
  }else if(x == "Column Chart"){
    columnChart();
    $('#switchHolder').css('display', 'none');
    $('#switchHolderTwo').css('display', 'none');
    $('#gridType').removeAttr('disabled');
  }else if(x == "Stacked Column Chart"){
    stackedColumnChart();
    $('#switchHolder').css('display', 'none');
    $('#switchHolderTwo').css('display', 'block');
    $('#gridType').removeAttr('disabled');
  }else if(x == "Column + Line Chart"){
    columnLineChart();
    $('#switchHolder').css('display', 'none');
    $('#switchHolderTwo').css('display', 'none');
    $('#gridType').removeAttr('disabled');
  }else if(x == "Bar Chart"){
    barChart();
    $('#switchHolder').css('display', 'none');
    $('#switchHolderTwo').css('display', 'none');
    $('#gridType').removeAttr('disabled');
  }else if(x == "Stacked Bar Chart"){
    stackedBarChart();
    $('#switchHolder').css('display', 'none');
    $('#switchHolderTwo').css('display', 'block');
    $('#gridType').removeAttr('disabled');
  }else if(x == "Scatter Plot"){
    scatterPlot();
    $('#switchHolder').css('display', 'none');
    $('#switchHolderTwo').css('display', 'none');
    $('#gridType').removeAttr('disabled');
  }else if(x == "Pie Chart"){
    pieChart();
    $('#switchHolder').css('display', 'block');
    $('#switchHolderTwo').css('display', 'none');
    $('#gridType').attr('disabled', 'disabled');
  }else if(x == "Donut Chart"){
    donutChart();
    $('#switchHolder').css('display', 'block');
    $('#switchHolderTwo').css('display', 'none');
    $('#gridType').attr('disabled', 'disabled');
  }else if(x == "Thin Donut Chart"){
    thinDonutChart();
    $('#switchHolder').css('display', 'block');
    $('#switchHolderTwo').css('display', 'none');
    $('#gridType').attr('disabled', 'disabled');
  };
};



function lineChart(){
  //$('#switchHolder').css('display', 'none');
  option.toolbox.feature.saveAsImage.name = 'Line Chart';
  option.series[0].type = 'line';
  option.series[1].type = 'line';
  option.series[2].type = 'line';
  option.series[3].type = 'line';
  option.series[4].type = 'line';
  option.series[5].type = 'line';
  option.series[0].stack = 'one';
  option.series[1].stack = 'two';
  option.series[2].stack = 'three';
  option.series[3].stack = 'four';
  option.series[4].stack = 'five';
  option.series[5].stack = 'six';
  option.series[0].areaStyle.opacity = 0 ;
  option.series[1].areaStyle.opacity = 0 ;
  option.series[2].areaStyle.opacity = 0 ;
  option.series[3].areaStyle.opacity = 0 ;
  option.series[4].areaStyle.opacity = 0 ;
  option.series[5].areaStyle.opacity = 0 ;
  option.xAxis.show = true;
  option.yAxis.show = true;
  option.grid.show = true;
  option.xAxis.type = 'category';
  option.yAxis.type = 'value';
  option.grid.top = 16;
  option.grid.right = 16;
  option.grid.left = 45;
  option.legend.orient = 'horizontal';
  option.legend.x = 'top';
  option.xAxis.boundaryGap = false;
  option.dataset.source = [
    ['Month', 'Jul', 'Aug', 'Sep','Oct', 'Nov','Dec', 'Jan', 'Feb', 'Mar', 'Apr', "May", 'Jun',],
    ['One', 720, 932, 901, 834, 760, 932, 801, 934, 820, 732, 901, 840],
    ['Two', 620, 632, 601, 634, 720, 632, 701, 634, 620, 632, 601, 703],
    ['Three', 420, 432, 501, 534, 520, 432, 401, 434, 450, 532, 401, 343],
    ['Four', 520, 532, 301, 334, 320, 532, 501, 534, 550, 332, 301, 450],
    ['Five', 240, 540, 345, 304, 546, 665, 345, 645, 345, 334, 443, 650],
    ['Six', 650, 667, 560, 580,559, 560, 660, 760, 750, 500, 540, 330]];
  //console.log(option.dataset.source);
  var json = JSON.stringify(option.dataset.source, null, '  ')
  $('#textarea')
  .text(json)
  .on('input', function(x) {
    var newValue = JSON.parse(x.target.value)
    option.dataset.source = newValue
    // console.log(newValue)
    if (chart) {
      chart.setOption(option, true);
    }
  });
};

function areaChart(){
  option.toolbox.feature.saveAsImage.name = 'Area Chart';
  option.series[0].type = 'line';
  option.series[1].type = 'line';
  option.series[2].type = 'line';
  option.series[3].type = 'line';
  option.series[4].type = 'line';
  option.series[5].type = 'line';
  option.series[0].stack = 'one';
  option.series[1].stack = 'two';
  option.series[2].stack = 'three';
  option.series[3].stack = 'four';
  option.series[4].stack = 'five';
  option.series[5].stack = 'six';
  option.series[0].areaStyle.opacity = 0.8 ;
  option.series[1].areaStyle.opacity = 0.8 ;
  option.series[2].areaStyle.opacity = 0.8 ;
  option.series[3].areaStyle.opacity = 0.8 ;
  option.series[4].areaStyle.opacity = 0.8 ;
  option.series[5].areaStyle.opacity = 0.8 ;
  option.xAxis.show = true;
  option.yAxis.show = true;
  option.grid.show = true;
  option.xAxis.type = 'category';
  option.yAxis.type = 'value';
  option.grid.top = 16;
  option.grid.right = 16;
  option.grid.left = 45;
  option.legend.orient = 'horizontal';
  option.legend.x = 'top';
  option.xAxis.boundaryGap = false;
  option.dataset.source = [
    ['Month', 'Jul', 'Aug', 'Sep','Oct', 'Nov','Dec', 'Jan', 'Feb', 'Mar', 'Apr', "May", 'Jun',],
    ['One', 720, 932, 901, 834, 760, 932, 801, 934, 820, 732, 901, 840],
    ['Two', 620, 632, 601, 634, 720, 632, 701, 634, 620, 632, 601, 703],
    ['Three', 420, 432, 501, 534, 520, 432, 401, 434, 450, 532, 401, 343],
    ['Four', 520, 532, 301, 334, 320, 532, 501, 534, 550, 332, 301, 450],
    ['Five', 240, 540, 345, 304, 546, 665, 345, 645, 345, 334, 443, 650],
    ['Six', 650, 667, 560, 580,559, 560, 660, 760, 750, 500, 540, 330]];
  //console.log(option.dataset.source);
  var json = JSON.stringify(option.dataset.source, null, '  ')
  $('#textarea')
  .text(json)
  .on('input', function(x) {
    var newValue = JSON.parse(x.target.value)
    option.dataset.source = newValue
    // console.log(newValue)
    if (chart) {
      chart.setOption(option, true);
    }
  });
};

function stackedAreaChart(){
  option.toolbox.feature.saveAsImage.name = 'Stacked Area Chart';
  option.series[0].type = 'line';
  option.series[1].type = 'line';
  option.series[2].type = 'line';
  option.series[3].type = 'line';
  option.series[4].type = 'line';
  option.series[5].type = 'line';
  option.series[0].stack = 'one';
  option.series[1].stack = 'one';
  option.series[2].stack = 'one';
  option.series[3].stack = 'one';
  option.series[4].stack = 'one';
  option.series[5].stack = 'one';
  option.series[0].areaStyle.opacity = 0.8 ;
  option.series[1].areaStyle.opacity = 0.8 ;
  option.series[2].areaStyle.opacity = 0.8 ;
  option.series[3].areaStyle.opacity = 0.8 ;
  option.series[4].areaStyle.opacity = 0.8 ;
  option.series[5].areaStyle.opacity = 0.8 ;
  option.xAxis.show = true;
  option.yAxis.show = true;
  option.grid.show = true;
  option.xAxis.type = 'category';
  option.yAxis.type = 'value';
  option.grid.top = 16;
  option.grid.right = 16;
  option.grid.left = 45;
  option.legend.orient = 'horizontal';
  option.legend.x = 'top';
  option.xAxis.boundaryGap = false;
  option.dataset.source = [
    ['Month', 'Jul', 'Aug', 'Sep','Oct', 'Nov','Dec', 'Jan', 'Feb', 'Mar', 'Apr', "May", 'Jun',],
    ['One', 720, 932, 901, 834, 760, 932, 801, 934, 820, 732, 901, 840],
    ['Two', 620, 632, 601, 634, 720, 632, 701, 634, 620, 632, 601, 703],
    ['Three', 420, 432, 501, 534, 520, 432, 401, 434, 450, 532, 401, 343],
    ['Four', 520, 532, 301, 334, 320, 532, 501, 534, 550, 332, 301, 450],
    ['Five', 240, 540, 345, 304, 546, 665, 345, 645, 345, 334, 443, 650],
    ['Six', 650, 667, 560, 580,559, 560, 660, 760, 750, 500, 540, 330]];
  //console.log(option.dataset.source);
  var json = JSON.stringify(option.dataset.source, null, '  ')
  $('#textarea')
  .text(json)
  .on('input', function(x) {
    var newValue = JSON.parse(x.target.value)
    option.dataset.source = newValue
    // console.log(newValue)
    if (chart) {
      chart.setOption(option, true);
    }
  });
};

function columnChart(){
  option.toolbox.feature.saveAsImage.name = 'Column Chart';
  option.series[0].type = 'bar';
  option.series[1].type = 'bar';
  option.series[2].type = 'bar';
  option.series[3].type = 'bar';
  option.series[4].type = 'bar';
  option.series[5].type = 'bar';
  option.series[0].stack = 'one';
  option.series[1].stack = 'two';
  option.series[2].stack = 'three';
  option.series[3].stack = 'four';
  option.series[4].stack = 'five';
  option.series[5].stack = 'six';
  option.series[0].label.show = false;
  option.series[1].label.show = false;
  option.series[2].label.show = false;
  option.series[3].label.show = false;
  option.series[4].label.show = false;
  option.series[5].label.show = false;
  option.xAxis.show = true;
  option.yAxis.show = true;
  option.xAxis.type = 'category';
  option.yAxis.type = 'value';
  option.grid.top = 16;
  option.grid.right = 16;
  option.grid.left = 45;
  option.legend.orient = 'horizontal';
  option.legend.x = 'top';
  option.series[0].itemStyle.barBorderWidth = 0;
  option.series[1].itemStyle.barBorderWidth = 0;
  option.series[2].itemStyle.barBorderWidth = 0;
  option.series[3].itemStyle.barBorderWidth = 0;
  option.series[4].itemStyle.barBorderWidth = 0;
  option.series[5].itemStyle.barBorderWidth = 0;
  option.xAxis.boundaryGap = true;
  option.dataset.source = [
    ['Month', 'Jul', 'Aug', 'Sep','Oct', 'Nov','Dec', 'Jan', 'Feb', 'Mar', 'Apr', "May", 'Jun',],
    ['One', 720, 932, 901, 834, 760, 932, 801, 934, 820, 732, 901, 840],
    ['Two', 620, 632, 601, 634, 720, 632, 701, 634, 620, 632, 601, 703],
    ['Three', 420, 432, 501, 534, 520, 432, 401, 434, 450, 532, 401, 343],
    ['Four', 520, 532, 301, 334, 320, 532, 501, 534, 550, 332, 301, 450],
    ['Five', 240, 540, 345, 304, 546, 665, 345, 645, 345, 334, 443, 650],
    ['Six', 650, 667, 560, 580,559, 560, 660, 760, 750, 500, 540, 330]];
  //console.log(option.dataset.source);
  var json = JSON.stringify(option.dataset.source, null, '  ')
  $('#textarea')
  .text(json)
  .on('input', function(x) {
    var newValue = JSON.parse(x.target.value)
    option.dataset.source = newValue
    // console.log(newValue)
    if (chart) {
      chart.setOption(option, true);
    }
  });
};

function stackedColumnChart(){
  option.toolbox.feature.saveAsImage.name = 'Stacked Column Chart';
  option.series[0].type = 'bar';
  option.series[1].type = 'bar';
  option.series[2].type = 'bar';
  option.series[3].type = 'bar';
  option.series[4].type = 'bar';
  option.series[5].type = 'bar';
  option.series[0].stack = 'one';
  option.series[1].stack = 'one';
  option.series[2].stack = 'one';
  option.series[3].stack = 'one';
  option.series[4].stack = 'one';
  option.series[5].stack = 'one';
  option.series[0].label.show = false;
  option.series[1].label.show = false;
  option.series[2].label.show = false;
  option.series[3].label.show = false;
  option.series[4].label.show = false;
  option.series[5].label.show = false;
  option.xAxis.show = true;
  option.yAxis.show = true;
  option.xAxis.type = 'category';
  option.yAxis.type = 'value';
  option.grid.top = 16;
  option.grid.right = 16;
  option.grid.left = 45;
  option.legend.orient = 'horizontal';
  option.legend.x = 'top';
  option.xAxis.boundaryGap = true;
  option.dataset.source = [
    ['Month', 'Jul', 'Aug', 'Sep','Oct', 'Nov','Dec', 'Jan', 'Feb', 'Mar', 'Apr', "May", 'Jun',],
    ['One', 720, 932, 901, 834, 760, 932, 801, 934, 820, 732, 901, 840],
    ['Two', 620, 632, 601, 634, 720, 632, 701, 634, 620, 632, 601, 703],
    ['Three', 420, 432, 501, 534, 520, 432, 401, 434, 450, 532, 401, 343],
    ['Four', 520, 532, 301, 334, 320, 532, 501, 534, 550, 332, 301, 450],
    ['Five', 240, 540, 345, 304, 546, 665, 345, 645, 345, 334, 443, 650],
    ['Six', 650, 667, 560, 580,559, 560, 660, 760, 750, 500, 540, 330]];
  //console.log(option.dataset.source);
  var json = JSON.stringify(option.dataset.source, null, '  ')
  $('#textarea')
  .text(json)
  .on('input', function(x) {
    var newValue = JSON.parse(x.target.value)
    option.dataset.source = newValue
    // console.log(newValue)
    if (chart) {
      chart.setOption(option, true);
    }
  });
};

function columnLineChart(){
  option.toolbox.feature.saveAsImage.name = 'Column + Line Chart';
  option.series[0].type = 'line';
  option.series[1].type = 'bar';
  option.series[2].type = 'bar';
  option.series[3].type = 'bar';
  option.series[4].type = 'bar';
  option.series[5].type = 'bar';
  option.series[0].itemStyle.borderWidth = 0;
  option.series[1].itemStyle.borderWidth = 0;
  option.series[2].itemStyle.borderWidth = 0;
  option.series[3].itemStyle.borderWidth = 0;
  option.series[4].itemStyle.borderWidth = 0;
  option.series[5].itemStyle.borderWidth = 0;
  option.series[0].stack = 'one';
  option.series[1].stack = 'two';
  option.series[2].stack = 'three';
  option.series[3].stack = 'four';
  option.series[4].stack = 'five';
  option.series[5].stack = 'six';
  option.series[0].label.show = false;
  option.series[1].label.show = false;
  option.series[2].label.show = false;
  option.series[3].label.show = false;
  option.series[4].label.show = false;
  option.series[5].label.show = false;
  option.xAxis.show = true;
  option.yAxis.show = true;
  option.xAxis.type = 'category';
  option.yAxis.type = 'value';
  option.grid.right = 26;
  option.grid.left = 45;
  option.legend.orient = 'horizontal';
  option.legend.x = 'top';
  option.series[0].itemStyle.barBorderWidth = 0;
  option.series[1].itemStyle.barBorderWidth = 0;
  option.series[2].itemStyle.barBorderWidth = 0;
  option.series[3].itemStyle.barBorderWidth = 0;
  option.series[4].itemStyle.barBorderWidth = 0;
  option.series[5].itemStyle.barBorderWidth = 0;
  option.xAxis.boundaryGap = true;
  option.series[0].areaStyle.opacity = 0 ;
  option.series[1].areaStyle.opacity = 0 ;
  option.series[2].areaStyle.opacity = 0 ;
  option.series[3].areaStyle.opacity = 0 ;
  option.series[4].areaStyle.opacity = 0 ;
  option.series[5].areaStyle.opacity = 0 ;
  option.dataset.source = [
    ['Month', 'Jul', 'Aug', 'Sep','Oct', 'Nov','Dec', 'Jan', 'Feb', 'Mar', 'Apr', "May", 'Jun',],
    ['One', 720, 932, 901, 834, 760, 932, 801, 934, 820, 732, 901, 840],
    ['Two', 620, 632, 601, 634, 720, 632, 701, 634, 620, 632, 601, 703],
    ['Three', 420, 432, 501, 534, 520, 432, 401, 434, 450, 532, 401, 343],
    ['Four', 520, 532, 301, 334, 320, 532, 501, 534, 550, 332, 301, 450],
    ['Five', 240, 540, 345, 304, 546, 665, 345, 645, 345, 334, 443, 650],
    ['Six', 650, 667, 560, 580,559, 560, 660, 760, 750, 500, 540, 330]];
  //console.log(option.dataset.source);
  var json = JSON.stringify(option.dataset.source, null, '  ')
  $('#textarea')
  .text(json)
  .on('input', function(x) {
    var newValue = JSON.parse(x.target.value)
    option.dataset.source = newValue
    // console.log(newValue)
    if (chart) {
      chart.setOption(option, true);
    }
  });
};

function barChart(){
  option.toolbox.feature.saveAsImage.name = 'Bar Chart';
  option.series[0].type = 'bar';
  option.series[1].type = 'bar';
  option.series[2].type = 'bar';
  option.series[3].type = 'bar';
  option.series[4].type = 'bar';
  option.series[5].type = 'bar';
  option.series[0].stack = 'one';
  option.series[1].stack = 'two';
  option.series[2].stack = 'three';
  option.series[3].stack = 'four';
  option.series[4].stack = 'five';
  option.series[5].stack = 'six';
  option.series[0].label.show = false;
  option.series[1].label.show = false;
  option.series[2].label.show = false;
  option.series[3].label.show = false;
  option.series[4].label.show = false;
  option.series[5].label.show = false;
  option.xAxis.show = true;
  option.yAxis.show = true;
  option.xAxis.type = 'value';
  option.yAxis.type = 'category';
  option.grid.right = 26;
  option.grid.left = 45;
  option.legend.orient = 'horizontal';
  option.legend.x = 'top';
  option.series[0].itemStyle.barBorderWidth = 0;
  option.series[1].itemStyle.barBorderWidth = 0;
  option.series[2].itemStyle.barBorderWidth = 0;
  option.series[3].itemStyle.barBorderWidth = 0;
  option.series[4].itemStyle.barBorderWidth = 0;
  option.series[5].itemStyle.barBorderWidth = 0;
  option.xAxis.boundaryGap = true;
  option.dataset.source = [
    ['Month', 'Jul', 'Aug', 'Sep','Oct', 'Nov','Dec', 'Jan', 'Feb', 'Mar', 'Apr', "May", 'Jun',],
    ['One', 720, 932, 901, 834, 760, 932, 801, 934, 820, 732, 901, 840],
    ['Two', 620, 632, 601, 634, 720, 632, 701, 634, 620, 632, 601, 703],
    ['Three', 420, 432, 501, 534, 520, 432, 401, 434, 450, 532, 401, 343],
    ['Four', 520, 532, 301, 334, 320, 532, 501, 534, 550, 332, 301, 450],
    ['Five', 240, 540, 345, 304, 546, 665, 345, 645, 345, 334, 443, 650],
    ['Six', 650, 667, 560, 580,559, 560, 660, 760, 750, 500, 540, 330]];
  //console.log(option.dataset.source);
  var json = JSON.stringify(option.dataset.source, null, '  ')
  $('#textarea')
  .text(json)
  .on('input', function(x) {
    var newValue = JSON.parse(x.target.value)
    option.dataset.source = newValue
    // console.log(newValue)
    if (chart) {
      chart.setOption(option, true);
    }
  });
};

function stackedBarChart(){
  option.toolbox.feature.saveAsImage.name = 'Stacked Bar Chart';
  option.series[0].type = 'bar';
  option.series[1].type = 'bar';
  option.series[2].type = 'bar';
  option.series[3].type = 'bar';
  option.series[4].type = 'bar';
  option.series[5].type = 'bar';
  option.series[0].stack = 'one';
  option.series[1].stack = 'one';
  option.series[2].stack = 'one';
  option.series[3].stack = 'one';
  option.series[4].stack = 'one';
  option.series[5].stack = 'one';
  option.series[0].label.show = false;
  option.series[1].label.show = false;
  option.series[2].label.show = false;
  option.series[3].label.show = false;
  option.series[4].label.show = false;
  option.series[5].label.show = false;
  option.xAxis.show = true;
  option.yAxis.show = true;
  option.xAxis.type = 'value';
  option.yAxis.type = 'category';
  option.grid.right = 26;
  option.grid.left = 45;
  option.legend.orient = 'horizontal';
  option.legend.x = 'top';
  option.xAxis.boundaryGap = true;
  option.dataset.source = [
    ['Month', 'Jul', 'Aug', 'Sep','Oct', 'Nov','Dec', 'Jan', 'Feb', 'Mar', 'Apr', "May", 'Jun',],
    ['One', 720, 932, 901, 834, 760, 932, 801, 934, 820, 732, 901, 840],
    ['Two', 620, 632, 601, 634, 720, 632, 701, 634, 620, 632, 601, 703],
    ['Three', 420, 432, 501, 534, 520, 432, 401, 434, 450, 532, 401, 343],
    ['Four', 520, 532, 301, 334, 320, 532, 501, 534, 550, 332, 301, 450],
    ['Five', 240, 540, 345, 304, 546, 665, 345, 645, 345, 334, 443, 650],
    ['Six', 650, 667, 560, 580,559, 560, 660, 760, 750, 500, 540, 330]];
  //console.log(option.dataset.source);
  var json = JSON.stringify(option.dataset.source, null, '  ')
  $('#textarea')
  .text(json)
  .on('input', function(x) {
    var newValue = JSON.parse(x.target.value)
    option.dataset.source = newValue
    // console.log(newValue)
    if (chart) {
      chart.setOption(option, true);
    }
  });
};

function scatterPlot(){
  option.toolbox.feature.saveAsImage.name = 'Scatter Plot';
  option.series[0].type = 'scatter';
  option.series[1].type = 'scatter';
  option.series[2].type = 'scatter';
  option.series[3].type = 'scatter';
  option.series[4].type = 'scatter';
  option.series[5].type = 'scatter';
  option.series[0].stack = 'one';
  option.series[1].stack = 'two';
  option.series[2].stack = 'three';
  option.series[3].stack = 'four';
  option.series[4].stack = 'five';
  option.series[5].stack = 'six';
  option.series[0].areaStyle.opacity = 0 ;
  option.series[1].areaStyle.opacity = 0 ;
  option.series[2].areaStyle.opacity = 0 ;
  option.series[3].areaStyle.opacity = 0 ;
  option.series[4].areaStyle.opacity = 0 ;
  option.series[5].areaStyle.opacity = 0 ;
  option.xAxis.show = true;
  option.yAxis.show = true;
  option.grid.show = true;
  option.xAxis.type = 'category';
  option.yAxis.type = 'value';
  option.grid.top = 16;
  option.grid.right = 16;
  option.grid.left = 45;
  option.legend.orient = 'horizontal';
  option.legend.x = 'top';
  option.xAxis.boundaryGap = true;
  option.series[0].symbolSize = 8;
  option.series[1].symbolSize = 8;
  option.series[2].symbolSize = 8;
  option.series[3].symbolSize = 8;
  option.series[4].symbolSize = 8;
  option.series[5].symbolSize = 8;
  option.series[0].itemStyle.borderWidth = 0;
  option.series[1].itemStyle.borderWidth = 0;
  option.series[2].itemStyle.borderWidth = 0;
  option.series[3].itemStyle.borderWidth = 0;
  option.series[4].itemStyle.borderWidth = 0;
  option.series[5].itemStyle.borderWidth = 0;
  option.dataset.source = [
    ['Month', 'Jul', 'Aug', 'Sep','Oct', 'Nov','Dec', 'Jan', 'Feb', 'Mar', 'Apr', "May", 'Jun',],
    ['One', 720, 932, 901, 834, 760, 932, 801, 934, 820, 732, 901, 840],
    ['Two', 620, 632, 601, 634, 720, 632, 701, 634, 620, 632, 601, 703],
    ['Three', 420, 432, 501, 534, 520, 432, 401, 434, 450, 532, 401, 343],
    ['Four', 520, 532, 301, 334, 320, 532, 501, 534, 550, 332, 301, 450],
    ['Five', 240, 540, 345, 304, 546, 665, 345, 645, 345, 334, 443, 650],
    ['Six', 650, 667, 560, 580,559, 560, 660, 760, 750, 500, 540, 330]];
  //console.log(option.dataset.source);
  var json = JSON.stringify(option.dataset.source, null, '  ')
  $('#textarea')
  .text(json)
  .on('input', function(x) {
    var newValue = JSON.parse(x.target.value)
    option.dataset.source = newValue
    // console.log(newValue)
    if (chart) {
      chart.setOption(option, true);
    }
  });
};

function pieChart(){
  option.toolbox.feature.saveAsImage.name = 'Pie Chart';
  option.series[0].type = 'pie';
  option.series[1].type = 'pie';
  option.series[2].type = 'pie';
  option.series[3].type = 'pie';
  option.series[4].type = 'pie';
  option.series[5].type = 'pie';
  option.series[0].stack = 'one';
  option.series[1].stack = 'two';
  option.series[2].stack = 'three';
  option.series[3].stack = 'four';
  option.series[4].stack = 'five';
  option.series[5].stack = 'six';
  option.xAxis.show = false;
  option.yAxis.show = false;
  option.grid.show = false;
  option.grid.right = 0;
  option.grid.left = 0;
  option.series[0].center = ['50%', '50%'];
  option.series[1].center = ['50%', '50%'];
  option.series[2].center = ['50%', '50%'];
  option.series[3].center = ['50%', '50%'];
  option.series[4].center = ['50%', '50%'];
  option.series[5].center = ['50%', '50%'];
  option.series[0].radius = ['0%', '80%'];
  option.series[1].radius = ['0%', '80%'];
  option.series[2].radius = ['0%', '80%'];
  option.series[3].radius = ['0%', '80%'];
  option.series[4].radius = ['0%', '80%'];
  option.series[5].radius = ['0%', '80%'];
  option.legend.orient = 'vertical';
  option.legend.x = 'left';
  option.series[0].itemStyle.borderWidth = 1;
  option.series[1].itemStyle.borderWidth = 1;
  option.series[2].itemStyle.borderWidth = 1;
  option.series[3].itemStyle.borderWidth = 1;
  option.series[4].itemStyle.borderWidth = 1;
  option.series[5].itemStyle.borderWidth = 1;
  option.dataset.source = [
                {value:335, name:'One'},
                {value:310, name:'Two'},
                {value:234, name:'Three'},
                {value:135, name:'Four'},
                {value:1548, name:'Five'},
                {value:310, name:'Six'}];
  //console.log(option.dataset.source);
  var json = JSON.stringify(option.dataset.source, null, '  ')
  $('#textarea')
  .text(json)
  .on('input', function(x) {
    var newValue = JSON.parse(x.target.value)
    option.dataset.source = newValue
    // console.log(newValue)
    if (chart) {
      chart.setOption(option, true);
    }
  });
};

function donutChart(){
  option.toolbox.feature.saveAsImage.name = 'Donut Chart';
  option.series[0].type = 'pie';
  option.series[1].type = 'pie';
  option.series[2].type = 'pie';
  option.series[3].type = 'pie';
  option.series[4].type = 'pie';
  option.series[5].type = 'pie';
  option.series[0].stack = 'one';
  option.series[1].stack = 'two';
  option.series[2].stack = 'three';
  option.series[3].stack = 'four';
  option.series[4].stack = 'five';
  option.series[5].stack = 'six';
  option.xAxis.show = false;
  option.yAxis.show = false;
  option.grid.show = false;
  option.grid.right = 0;
  option.grid.left = 0;
  option.series[0].center = ['50%', '50%'];
  option.series[1].center = ['50%', '50%'];
  option.series[2].center = ['50%', '50%'];
  option.series[3].center = ['50%', '50%'];
  option.series[4].center = ['50%', '50%'];
  option.series[5].center = ['50%', '50%'];
  option.series[0].radius = ['55%', '80%'];
  option.series[1].radius = ['55%', '80%'];
  option.series[2].radius = ['55%', '80%'];
  option.series[3].radius = ['55%', '80%'];
  option.series[4].radius = ['55%', '80%'];
  option.series[5].radius = ['55%', '80%'];
  option.legend.orient = 'vertical';
  option.legend.x = 'left';
  option.series[0].itemStyle.borderWidth = 1;
  option.series[1].itemStyle.borderWidth = 1;
  option.series[2].itemStyle.borderWidth = 1;
  option.series[3].itemStyle.borderWidth = 1;
  option.series[4].itemStyle.borderWidth = 1;
  option.series[5].itemStyle.borderWidth = 1;
  option.dataset.source = [
                {value:335, name:'One'},
                {value:310, name:'Two'},
                {value:234, name:'Three'},
                {value:135, name:'Four'},
                {value:1548, name:'Five'},
                {value:310, name:'Six'}];
  //console.log(option.dataset.source);
  var json = JSON.stringify(option.dataset.source, null, '  ')
  $('#textarea')
  .text(json)
  .on('input', function(x) {
    var newValue = JSON.parse(x.target.value)
    option.dataset.source = newValue
    // console.log(newValue)
    if (chart) {
      chart.setOption(option, true);
    }
  });
};

function thinDonutChart(){
  option.toolbox.feature.saveAsImage.name = 'Thin Donut Chart';
  option.series[0].type = 'pie';
  option.series[1].type = 'pie';
  option.series[2].type = 'pie';
  option.series[3].type = 'pie';
  option.series[4].type = 'pie';
  option.series[5].type = 'pie';
  option.series[0].stack = 'one';
  option.series[1].stack = 'two';
  option.series[2].stack = 'three';
  option.series[3].stack = 'four';
  option.series[4].stack = 'five';
  option.series[5].stack = 'six';
  option.xAxis.show = false;
  option.yAxis.show = false;
  option.grid.show = false;
  option.grid.right = 0;
  option.grid.left = 0;
  option.series[0].center = ['50%', '50%'];
  option.series[1].center = ['50%', '50%'];
  option.series[2].center = ['50%', '50%'];
  option.series[3].center = ['50%', '50%'];
  option.series[4].center = ['50%', '50%'];
  option.series[5].center = ['50%', '50%'];
  option.series[0].radius = ['68%', '77%'];
  option.series[1].radius = ['68%', '77%'];
  option.series[2].radius = ['68%', '77%'];
  option.series[3].radius = ['68%', '77%'];
  option.series[4].radius = ['68%', '77%'];
  option.series[5].radius = ['68%', '77%'];
  option.legend.orient = 'vertical';
  option.legend.x = 'left';
  option.series[0].itemStyle.borderWidth = 1;
  option.series[1].itemStyle.borderWidth = 1;
  option.series[2].itemStyle.borderWidth = 1;
  option.series[3].itemStyle.borderWidth = 1;
  option.series[4].itemStyle.borderWidth = 1;
  option.series[5].itemStyle.borderWidth = 1;
  option.dataset.source = [
                {value:335, name:'One'},
                {value:310, name:'Two'},
                {value:234, name:'Three'},
                {value:135, name:'Four'},
                {value:1548, name:'Five'},
                {value:310, name:'Six'}];
  //console.log(option.dataset.source);
  var json = JSON.stringify(option.dataset.source, null, '  ')
  $('#textarea')
  .text(json)
  .on('input', function(x) {
    var newValue = JSON.parse(x.target.value)
    option.dataset.source = newValue
    // console.log(newValue)
    if (chart) {
      chart.setOption(option, true);
    }
  });
};

//Connect Data Variable to Text Area on page
var json = JSON.stringify(option.dataset.source, null, '  ')

$('#textarea')
  .text(json)
  .on('input', function(x) {
    var newValue = JSON.parse(x.target.value)
    option.dataset.source = newValue
    // console.log(newValue)
    if (chart) {
      chart.setOption(option, true);
    }
  });




//Change the Height of the Graph block
function changeHeight()
        {
           userInput = document.getElementById("userInput").value;
          $('#main').css('height', userInput);

        };
$("#userInput").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#heightButton").click();
    }
});




//Change the Width of the Graph block
function changeWidth()
        {
           userInput = document.getElementById("userInput2").value;
          $('#main').css('width', userInput);
        };

$("#userInput2").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#widthButton").click();
    }
});




// Render the Graph
$( "#renderButton" ).click(function() {
  $('#main').css('border', 'none');
  chart = echarts.init(document.getElementById("main"), 'dark');
  chart.setOption(option);
});


// Modal Functions /////////////////
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("infoIcon");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";

};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


$('#switchOne').click(function(){
    if (this.checked) {
      option.series[0].label.show = true;
      option.series[1].label.show = true;
      option.series[2].label.show = true;
      option.series[3].label.show = true;
      option.series[4].label.show = true;
      option.series[5].label.show = true;
      option.series[0].labelLine.show = true;
      option.series[1].labelLine.show = true;
      option.series[2].labelLine.show = true;
      option.series[3].labelLine.show = true;
      option.series[4].labelLine.show = true;
      option.series[5].labelLine.show = true;
    }else{
      option.series[0].label.show = false;
      option.series[1].label.show = false;
      option.series[2].label.show = false;
      option.series[3].label.show = false;
      option.series[4].label.show = false;
      option.series[5].label.show = false;
      option.series[0].labelLine.show = false;
      option.series[1].labelLine.show = false;
      option.series[2].labelLine.show = false;
      option.series[3].labelLine.show = false;
      option.series[4].labelLine.show = false;
      option.series[5].labelLine.show = false;
    };
}) ;


$('#switchTwo').click(function(){
    if (this.checked) {
      option.series[0].itemStyle.barBorderWidth = 1;
      option.series[1].itemStyle.barBorderWidth = 1;
      option.series[2].itemStyle.barBorderWidth = 1;
      option.series[3].itemStyle.barBorderWidth = 1;
      option.series[4].itemStyle.barBorderWidth = 1;
      option.series[5].itemStyle.barBorderWidth = 1;
      option.series[0].itemStyle.borderWidth = 1;
      option.series[1].itemStyle.borderWidth = 1;
      option.series[2].itemStyle.borderWidth = 1;
      option.series[3].itemStyle.borderWidth = 1;
      option.series[4].itemStyle.borderWidth = 1;
      option.series[5].itemStyle.borderWidth = 1;
    }else{
      option.series[0].itemStyle.barBorderWidth = 0;
      option.series[1].itemStyle.barBorderWidth = 0;
      option.series[2].itemStyle.barBorderWidth = 0;
      option.series[3].itemStyle.barBorderWidth = 0;
      option.series[4].itemStyle.barBorderWidth = 0;
      option.series[5].itemStyle.barBorderWidth = 0;
      option.series[0].itemStyle.borderWidth = 0;
      option.series[1].itemStyle.borderWidth = 0;
      option.series[2].itemStyle.borderWidth = 0;
      option.series[3].itemStyle.borderWidth = 0;
      option.series[4].itemStyle.borderWidth = 0;
      option.series[5].itemStyle.borderWidth = 0;
    };
}) ;



// Open modal on first visit
$( document ).ready(function() {
  if (document.cookie.indexOf('visited=true') == -1){
    // load the overlay
    modal.style.display = "block";

    var year = 1000*60*60*24*365;
    var expires = new Date((new Date()).valueOf() + year);
    document.cookie = "visited=true;expires=" + expires.toUTCString();

  }
});


$('#inputText').click(function(){
    $('#selectModal').css('visibility','visible');
});
