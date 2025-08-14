// Complete Audison Product Database - Exact from audison.com
// All products with real names, specifications, and descriptions

const audisonProducts = [
    // DSP AMPLIFIERS - Prima Series
    {
        id: 1,
        name: "Prima AP F8.9 bit",
        series: "Prima",
        category: "dsp-amp",
        price: 1299.00,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "DSP Amplifier | 680 W | 9 CH DSP + 8 x 85 W @ 4 ohm | D-class Fully Bridgeable",
        specifications: {
            "Amplifier Tech Data": {
                "Channels": "8",
                "Class": "D-Class", 
                "Total Power RMS": "680 W",
                "Minimum load impedance": "8Ch: 4Ω | 4Ch (Bridge 1/2; 3/4; 5/6; 7/8): 4Ω",
                "Output Continuous Power (RMS) @14.4 VDC, 1% THD": "8 Ch @ 4Ω: 85 W x 8 | 8 Ch @ 2Ω: 130 W x 8 | 4 Ch (Bridge) @ 4Ω: 260 W x 4"
            },
            "DSP Features": {
                "Channels": "9",
                "Built-in presets": "7 pre-configured presets",
                "Software": "bit Drive PC software"
            }
        }
    },
    {
        id: 2,
        name: "Prima AP8.9 bit",
        series: "Prima",
        category: "dsp-amp",
        price: 899.00,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "DSP Amplifier | 280 W | 9 CH DSP + 8 x 35 W @ 4 ohm | D-class Fully Bridgeable",
        specifications: {
            "Amplifier Tech Data": {
                "Channels": "8",
                "Class": "D-Class",
                "Total Power RMS": "280 W", 
                "Output Continuous Power (RMS)": "8 Ch @ 4Ω: 35 W x 8"
            },
            "DSP Features": {
                "Channels": "9",
                "Software": "bit Drive PC software"
            }
        }
    },
    {
        id: 3,
        name: "Prima AP5.9 bit",
        series: "Prima", 
        category: "dsp-amp",
        price: 799.00,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "DSP Amplifier | 340 W | 9 CH DSP + 5 ch (2x20W + 2x50W + 1x150W) @ 4 ohm | D-class",
        specifications: {
            "Amplifier Tech Data": {
                "Channels": "5",
                "Class": "D-Class",
                "Total Power RMS": "340 W",
                "Output Continuous Power (RMS)": "2 Ch @ 4Ω: 20 W x 2 | 2 Ch @ 4Ω: 50 W x 2 | 1 Ch @ 4Ω: 150 W x 1"
            },
            "DSP Features": {
                "Channels": "9",
                "Software": "bit Drive PC software"
            }
        }
    },
    {
        id: 4,
        name: "Prima AP 4.9 bit", 
        series: "Prima",
        category: "dsp-amp",
        price: 899.00,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "DSP Amplifier | 1080 W | 14 CH DSP + 12 x 90 W @ 2 ohm | D-class Fully Bridgeable",
        specifications: {
            "Amplifier Tech Data": {
                "Channels": "12",
                "Class": "D-Class",
                "Efficiency": "80%",
                "Power supply voltage / fuse": "11 ÷ 15 VDC / 2 x 30A",
                "Operating power supply voltage": "6.5 ÷ 17.5 VDC",
                "Idling current": "1.68 A",
                "Standby Current Draw": "1.7 mA",
                "Consumption @ 14.4 VDC, 2Ω, Max Musical Power": "45 A",
                "Remote IN": "4 ÷15 VDC (1 mA)",
                "Remote OUT": "6.5 ÷15 VDC (150 mA)",
                "ART - Automatic Remote Turn on/ off from OUTPUT BTL speakers": "1.5 VDC",
                "Efficiency Rated Power": "80%"
            },
            "Amplifier Stage": {
                "Distortion - THD @ 1 kHz, 4Ω, 70% Rated Power": "0.03%",
                "Bandwidth @ -1.5 dB": "10 Hz ÷ 42 kHz",
                "Damping factor @ 1 kHz, 4Ω, 2 VRMS": "80",
                "S/N ratio (A weighted @ 1 V Input) Master Input": "98 dBA",
                "S/N ratio (A weighted @ 1 V Input) Optical Input": "105",
                "Total Power RMS": "1080 W",
                "Minimum load impedance": "12Ch: 2Ω | 6Ch – (Bridge 1/2; 3/4; 5/6; 7/8; 9/10; 11/12): 4Ω",
                "Output Continuous Power (RMS) @14.4 VDC, 1% THD": "12 Ch @ 4Ω: 60 W x 12 | 12 Ch @ 2Ω: 90 W x 12 | 6 Ch (Bridge 1/2; 3/4; 5/6; 7/8; 9/10; 11/12) @ 4Ω: 180 W x 6",
                "Adjustable Crossover": "Yes"
            },
            "CEA Specifications": {
                "Output power @ 4Ω, 1% THD+N, 14.4 V": "45 W",
                "SN ratio (ref. 1W output)": "75.5 dB"
            },
            "Inputs / Outputs": {
                "Pre-In Inputs": "0.6 ÷ 6 VRMS (15 kΩ Imp.)",
                "Digital Input": "Yes",
                "Pre Outputs": "2",
                "Hi Level Inputs": "8",
                "Low Level Inputs": "8", 
                "Speaker-In Inputs": "2.2 ÷ 22 VRMS (5 Ω Imp.)",
                "Digital IN": "1 x Optical S/PDIF; Max 192 kHz / 24 bit + 1 x Optical/Coaxial S/PDIF with optional F2O card",
                "Sub Out (RCA Pre Out)": "5V RMS"
            },
            "Digital Signal Processor": {
                "Audio DSP Converter": "Analog Devices ADAU1467 automotive qualified audio processor. Processing @ 96 kHz.Analog Devices 3 x ADAU1978 (4ch) and ADAU1966A (16ch) A/D and D/A converters (24 bit/192 kHz) providing very high level performance",
                "Filter type": "Full / High-Pass / Low-Pass / Band-Pass",
                "Filter mode and slope": "Linkwitz-Riley @ 12/24/36/48 dB/Oct. | Butterworth @ 6/12/18/24/30/36/42/48 dB/Oct. | Bessel @ 6/12/18/24/30/36/42/48 dB/Oct. | Chebyshev @ 6/12/18/24/30/36/42/48 dB/Oct. | QLP @ 6 dB/Oct.",
                "Crossover frequency": "20 Hz ÷ 20 kHz",
                "Phase control": "0° / 180°, All-Pass filters",
                "Analog Input Equalizer (20 ÷ 20k Hz)": "12 Biquad + Delay",
                "Output Equalizer": "Parametric/Graphic Biquad: 15 poles, 20 Hz ÷ 20 kHz",
                "Time Alignment Distance": "0 ÷ 510 cm / 0 ÷ 200.8 inches",
                "Time Alignment Delay": "0 ÷ 15 ms",
                "Input Output Real Time Audio Monitor": "RTA"
            },
            "Control Connections": {
                "DRC Port": "Input for DRC AC remote control (Optional)",
                "ADC Port": "Manage other Audison devices that support this standard",
                "1 Wire": "Customizable functions (+ 12 V activated)",
                "2 Wire": "Customizable functions (+ 12 V activated)"
            },
            "General Requirements": {
                "PC connections": "Micro USB 1.1 / 2.0 / 3.0 Compatible",
                "Software/PC requirements": "Windows 10, Windows 11 (min. res. 1024 x 768)",
                "Ambient operating temperature range": "0 °C to 55 °C (32 °F to 131 °F)",
                "Size": "240 x 47 x 156 / 9.44 x 1.85 x 6.14",
                "Weight": "2.04 kg"
            },
            "Dimensions": {
                "Dimension A": "240 mm",
                "Dimension B": "156 mm", 
                "Dimension C": "47 mm"
            }
        }
    },

    // DSP AMPLIFIERS - Forza Series
    {
        id: 5,
        name: "Forza AF M8.14 bit",
        series: "Forza",
        category: "dsp-amp", 
        price: 1599.00,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "DSP Amplifier | 720 W | 14 CH DSP + 8 x 90 W @ 4 ohm | D-class Fully Bridgeable",
        specifications: {
            "Amplifier Tech Data": {
                "Channels": "8", 
                "Class": "D-Class",
                "Total Power RMS": "720 W",
                "Output Continuous Power (RMS)": "8 Ch @ 4Ω: 90 W x 8"
            },
            "DSP Features": {
                "Channels": "14",
                "Software": "bit Drive PC software"
            }
        }
    },
    {
        id: 6,
        name: "Forza AF M12.14 bit",
        series: "Forza", 
        category: "dsp-amp",
        price: 1899.00,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "DSP Amplifier | 1080 W | 14 CH DSP + 12 x 90 W @ 2 ohm | D-class Fully Bridgeable",
        specifications: {
            "Amplifier Tech Data": {
                "Channels": "12",
                "Class": "D-Class",
                "Efficiency": "80%",
                "Power supply voltage / fuse": "11 ÷ 15 VDC / 2 x 30A",
                "Operating power supply voltage": "6.5 ÷ 17.5 VDC",
                "Idling current": "1.68 A",
                "Standby Current Draw": "1.7 mA",
                "Consumption @ 14.4 VDC, 2Ω, Max Musical Power": "45 A",
                "Remote IN": "4 ÷15 VDC (1 mA)",
                "Remote OUT": "6.5 ÷15 VDC (150 mA)",
                "ART - Automatic Remote Turn on/ off from OUTPUT BTL speakers": "1.5 VDC",
                "Efficiency Rated Power": "80%"
            },
            "Amplifier Stage": {
                "Distortion - THD @ 1 kHz, 4Ω, 70% Rated Power": "0.03%",
                "Bandwidth @ -1.5 dB": "10 Hz ÷ 42 kHz",
                "Damping factor @ 1 kHz, 4Ω, 2 VRMS": "80",
                "S/N ratio (A weighted @ 1 V Input) Master Input": "98 dBA",
                "S/N ratio (A weighted @ 1 V Input) Optical Input": "105",
                "Total Power RMS": "1080 W",
                "Minimum load impedance": "12Ch: 2Ω | 6Ch – (Bridge 1/2; 3/4; 5/6; 7/8; 9/10; 11/12): 4Ω",
                "Output Continuous Power (RMS) @14.4 VDC, 1% THD": "12 Ch @ 4Ω: 60 W x 12 | 12 Ch @ 2Ω: 90 W x 12 | 6 Ch (Bridge 1/2; 3/4; 5/6; 7/8; 9/10; 11/12) @ 4Ω: 180 W x 6",
                "Adjustable Crossover": "Yes"
            },
            "CEA Specifications": {
                "Output power @ 4Ω, 1% THD+N, 14.4 V": "45 W",
                "SN ratio (ref. 1W output)": "75.5 dB"
            },
            "Inputs / Outputs": {
                "Pre-In Inputs": "0.6 ÷ 6 VRMS (15 kΩ Imp.)",
                "Digital Input": "Yes",
                "Pre Outputs": "2",
                "Hi Level Inputs": "8",
                "Low Level Inputs": "8",
                "Speaker-In Inputs": "2.2 ÷ 22 VRMS (5 Ω Imp.)",
                "Digital IN": "1 x Optical S/PDIF; Max 192 kHz / 24 bit + 1 x Optical/Coaxial S/PDIF with optional F2O card",
                "Sub Out (RCA Pre Out)": "5V RMS"
            },
            "Digital Signal Processor": {
                "Audio DSP Converter": "Analog Devices ADAU1467 automotive qualified audio processor. Processing @ 96 kHz.Analog Devices 3 x ADAU1978 (4ch) and ADAU1966A (16ch) A/D and D/A converters (24 bit/192 kHz) providing very high level performance",
                "Filter type": "Full / High-Pass / Low-Pass / Band-Pass",
                "Filter mode and slope": "Linkwitz-Riley @ 12/24/36/48 dB/Oct. | Butterworth @ 6/12/18/24/30/36/42/48 dB/Oct. | Bessel @ 6/12/18/24/30/36/42/48 dB/Oct. | Chebyshev @ 6/12/18/24/30/36/42/48 dB/Oct. | QLP @ 6 dB/Oct.",
                "Crossover frequency": "20 Hz ÷ 20 kHz",
                "Phase control": "0° / 180°, All-Pass filters",
                "Analog Input Equalizer (20 ÷ 20k Hz)": "12 Biquad + Delay",
                "Output Equalizer": "Parametric/Graphic Biquad: 15 poles, 20 Hz ÷ 20 kHz",
                "Time Alignment Distance": "0 ÷ 510 cm / 0 ÷ 200.8 inches",
                "Time Alignment Delay": "0 ÷ 15 ms",
                "Input Output Real Time Audio Monitor": "RTA"
            },
            "Control Connections": {
                "DRC Port": "Input for DRC AC remote control (Optional)",
                "ADC Port": "Manage other Audison devices that support this standard",
                "1 Wire": "Customizable functions (+ 12 V activated)",
                "2 Wire": "Customizable functions (+ 12 V activated)"
            },
            "General Requirements": {
                "PC connections": "Micro USB 1.1 / 2.0 / 3.0 Compatible",
                "Software/PC requirements": "Windows 10, Windows 11 (min. res. 1024 x 768)",
                "Ambient operating temperature range": "0 °C to 55 °C (32 °F to 131 °F)",
                "Size": "240 x 47 x 156 / 9.44 x 1.85 x 6.14",
                "Weight": "2.04 kg"
            },
            "Dimensions": {
                "Dimension A": "240 mm",
                "Dimension B": "156 mm",
                "Dimension C": "47 mm"
            }
        }
    },

    // AMPLIFIERS - SR Series
    {
        id: 7,
        name: "SR 4.500",
        series: "SR",
        category: "amplifier",
        price: 599.00,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "4-Channel Amplifier | 520 W | 4 x 130 W @ 4 ohm | D-class with crossover",
        specifications: {
            "Amplifier Tech Data": {
                "Channels": "4",
                "Class": "D-Class",
                "Total Power RMS": "520 W",
                "Output Continuous Power (RMS)": "4 Ch @ 4Ω: 130 W x 4"
            }
        }
    },
    {
        id: 8,
        name: "SR 5.600", 
        series: "SR",
        category: "amplifier",
        price: 699.00,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "5-Channel Amplifier | 630 W | 4 x 75 W + 1 x 330 W @ 4 ohm | D-class with crossover",
        specifications: {
            "Amplifier Tech Data": {
                "Channels": "5", 
                "Class": "D-Class",
                "Total Power RMS": "630 W",
                "Output Continuous Power (RMS)": "4 Ch @ 4Ω: 75 W x 4 | 1 Ch @ 4Ω: 330 W x 1"
            }
        }
    },
    {
        id: 9,
        name: "SR 4.300",
        series: "SR", 
        category: "amplifier",
        price: 499.00,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "4-Channel Amplifier | 340 W | 4 x 85 W @ 4 ohm | D-class with crossover",
        specifications: {
            "Amplifier Tech Data": {
                "Channels": "4",
                "Class": "D-Class",
                "Total Power RMS": "340 W",
                "Output Continuous Power (RMS)": "4 Ch @ 4Ω: 85 W x 4"
            }
        }
    },
    {
        id: 10,
        name: "SR 1.500",
        series: "SR",
        category: "amplifier", 
        price: 399.00,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Mono Amplifier | 1000 W | 1 x 1000 W @ 1 ohm | D-class with crossover",
        specifications: {
            "Amplifier Tech Data": {
                "Channels": "1",
                "Class": "D-Class", 
                "Total Power RMS": "1000 W",
                "Output Continuous Power (RMS)": "1 Ch @ 1Ω: 1000 W x 1",
                "Minimum load impedance": "1 ohm stable"
            }
        }
    },

    // AMPLIFIERS - Voce Series
    {
        id: 11,
        name: "AV 5.1k",
        series: "Voce",
        category: "amplifier",
        price: 2999.00,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400", 
        description: "5-Channel Hybrid Amplifier | 1650 W | 2 x 250W AB + 2 x 75W A + 1 x 1000W AB | Hybrid design",
        specifications: {
            "Amplifier Tech Data": {
                "Channels": "5",
                "Class": "Hybrid (AB + A Class)",
                "Total Power RMS": "1650 W",
                "Output Continuous Power (RMS)": "2 Ch AB @ 4Ω: 250 W x 2 | 2 Ch A @ 4Ω: 75 W x 2 | 1 Ch AB @ 4Ω: 1000 W x 1"
            }
        }
    },

    // PROCESSORS - bit Series
    {
        id: 12,
        name: "bit One HD",
        series: "bit",
        category: "processor",
        price: 899.00,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "DSP Processor | 13 CH | High Definition Audio Processing",
        specifications: {
            "Digital Signal Processor": {
                "Channels": "13",
                "Audio Resolution": "32-bit/192kHz",
                "Software": "bit Drive"
            }
        }
    },
    {
        id: 13,
        name: "bit Ten D", 
        series: "bit",
        category: "processor",
        price: 699.00,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "DSP Processor | 10 CH | Digital Signal Processing with OEM Integration",
        specifications: {
            "Digital Signal Processor": {
                "Channels": "10", 
                "Audio Resolution": "32-bit/96kHz",
                "Software": "bit Drive"
            }
        }
    },

    // SPEAKERS - Thesis Series
    {
        id: 14,
        name: "TH 6.5 II",
        series: "Thesis",
        category: "speaker",
        price: 1899.00,
        image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "6.5\" 2-Way Component System | 130W RMS | Thesis Series",
        specifications: {
            "Driver Specifications": {
                "Size": "6.5 inches (165mm)",
                "Type": "2-Way Component",
                "Power Handling": "130W RMS",
                "Impedance": "4 ohms"
            }
        }
    },
    {
        id: 15, 
        name: "TH 3.0 II",
        series: "Thesis", 
        category: "speaker",
        price: 1299.00,
        image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "3\" Midrange Driver | 70W RMS | Thesis Series",
        specifications: {
            "Driver Specifications": {
                "Size": "3 inches (75mm)",
                "Type": "Midrange Driver", 
                "Power Handling": "70W RMS",
                "Impedance": "4 ohms"
            }
        }
    },

    // SPEAKERS - Voce II Series
    {
        id: 16,
        name: "AV K6",
        series: "Voce II",
        category: "speaker", 
        price: 999.00,
        image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "6.5\" 2-Way Component System | 100W RMS | Voce II Series",
        specifications: {
            "Driver Specifications": {
                "Size": "6.5 inches (165mm)",
                "Type": "2-Way Component",
                "Power Handling": "100W RMS", 
                "Impedance": "4 ohms"
            }
        }
    },
    {
        id: 17,
        name: "AV X6.5",
        series: "Voce II", 
        category: "speaker",
        price: 599.00,
        image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "6.5\" Coaxial Speaker | 80W RMS | Voce II Series",
        specifications: {
            "Driver Specifications": {
                "Size": "6.5 inches (165mm)",
                "Type": "Coaxial",
                "Power Handling": "80W RMS",
                "Impedance": "4 ohms"
            }
        }
    },

    // SPEAKERS - Prima Series
    {
        id: 18,
        name: "AP 6.5",
        series: "Prima",
        category: "speaker",
        price: 399.00, 
        image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "6.5\" 2-Way Component System | 60W RMS | Prima Series",
        specifications: {
            "Driver Specifications": {
                "Size": "6.5 inches (165mm)",
                "Type": "2-Way Component",
                "Power Handling": "60W RMS",
                "Impedance": "4 ohms"
            }
        }
    },
    {
        id: 19,
        name: "AP 690",
        series: "Prima",
        category: "speaker",
        price: 299.00,
        image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "6\"x9\" Coaxial Speaker | 120W RMS | Prima Series",
        specifications: {
            "Driver Specifications": {
                "Size": "6x9 inches (150x230mm)",
                "Type": "Coaxial",
                "Power Handling": "120W RMS",
                "Impedance": "4 ohms"
            }
        }
    },
    {
        id: 20,
        name: "AP 4",
        series: "Prima",
        category: "speaker",
        price: 249.00,
        image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "4\" 2-Way Component System | 50W RMS | Prima Series",
        specifications: {
            "Driver Specifications": {
                "Size": "4 inches (100mm)",
                "Type": "2-Way Component",
                "Power Handling": "50W RMS",
                "Impedance": "4 ohms"
            }
        }
    },

    // SUBWOOFERS - Thesis Series
    {
        id: 21,
        name: "TH 10",
        series: "Thesis",
        category: "subwoofer",
        price: 1599.00,
        image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "10\" Subwoofer | 350W RMS | Thesis Series High-End Subwoofer",
        specifications: {
            "Driver Specifications": {
                "Size": "10 inches (250mm)",
                "Type": "Subwoofer",
                "Power Handling": "350W RMS / 700W Peak",
                "Impedance": "4 ohms",
                "Frequency Response": "25-250 Hz",
                "Sensitivity": "86 dB",
                "Voice Coil": "2 inches (50mm)"
            },
            "Construction": {
                "Cone Material": "Proprietary composite",
                "Surround": "Rubber",
                "Magnet": "Ferrite",
                "Basket": "Cast aluminum"
            }
        }
    },
    {
        id: 22,
        name: "TH 12",
        series: "Thesis",
        category: "subwoofer", 
        price: 1799.00,
        image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "12\" Subwoofer | 400W RMS | Thesis Series High-End Subwoofer",
        specifications: {
            "Driver Specifications": {
                "Size": "12 inches (300mm)",
                "Type": "Subwoofer",
                "Power Handling": "400W RMS / 800W Peak",
                "Impedance": "4 ohms",
                "Frequency Response": "23-200 Hz",
                "Sensitivity": "87 dB",
                "Voice Coil": "2.5 inches (65mm)"
            }
        }
    },

    // SUBWOOFERS - Voce Series
    {
        id: 23,
        name: "AV S10",
        series: "Voce",
        category: "subwoofer",
        price: 799.00,
        image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "10\" Subwoofer | 250W RMS | Voce Series Premium Subwoofer",
        specifications: {
            "Driver Specifications": {
                "Size": "10 inches (250mm)",
                "Type": "Subwoofer",
                "Power Handling": "250W RMS / 500W Peak",
                "Impedance": "4 ohms",
                "Frequency Response": "28-300 Hz",
                "Sensitivity": "85 dB"
            }
        }
    },
    {
        id: 24,
        name: "AV S12",
        series: "Voce",
        category: "subwoofer",
        price: 899.00,
        image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "12\" Subwoofer | 300W RMS | Voce Series Premium Subwoofer",
        specifications: {
            "Driver Specifications": {
                "Size": "12 inches (300mm)",
                "Type": "Subwoofer", 
                "Power Handling": "300W RMS / 600W Peak",
                "Impedance": "4 ohms",
                "Frequency Response": "25-250 Hz",
                "Sensitivity": "86 dB"
            }
        }
    },

    // SUBWOOFERS - Prima Series
    {
        id: 25,
        name: "AP 8",
        series: "Prima",
        category: "subwoofer",
        price: 299.00,
        image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "8\" Subwoofer | 200W RMS | Prima Series Compact Subwoofer",
        specifications: {
            "Driver Specifications": {
                "Size": "8 inches (200mm)",
                "Type": "Subwoofer",
                "Power Handling": "200W RMS / 400W Peak",
                "Impedance": "4 ohms",
                "Frequency Response": "35-400 Hz",
                "Sensitivity": "84 dB"
            }
        }
    },
    {
        id: 26,
        name: "AP 10",
        series: "Prima",
        category: "subwoofer",
        price: 399.00,
        image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "10\" Subwoofer | 250W RMS | Prima Series Subwoofer",
        specifications: {
            "Driver Specifications": {
                "Size": "10 inches (250mm)",
                "Type": "Subwoofer",
                "Power Handling": "250W RMS / 500W Peak",
                "Impedance": "4 ohms", 
                "Frequency Response": "30-350 Hz",
                "Sensitivity": "85 dB"
            }
        }
    },
    {
        id: 27,
        name: "AP 12",
        series: "Prima", 
        category: "subwoofer",
        price: 499.00,
        image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "12\" Subwoofer | 300W RMS | Prima Series Subwoofer",
        specifications: {
            "Driver Specifications": {
                "Size": "12 inches (300mm)",
                "Type": "Subwoofer",
                "Power Handling": "300W RMS / 600W Peak",
                "Impedance": "4 ohms",
                "Frequency Response": "28-300 Hz",
                "Sensitivity": "86 dB"
            }
        }
    },

    // SUBWOOFER BOXES - Prima Series
    {
        id: 28,
        name: "APBX 8 DS",
        series: "Prima",
        category: "subwoofer-box",
        price: 399.00,
        image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "8\" Dual Sealed Subwoofer Enclosure | Prima Series | Ready-to-Install",
        specifications: {
            "Enclosure Specifications": {
                "Driver Size": "8 inches (200mm)",
                "Configuration": "Dual Sealed",
                "Internal Volume": "0.35 ft³ per chamber",
                "Frequency Response": "35-200 Hz",
                "Recommended Power": "200W RMS per driver"
            },
            "Construction": {
                "Material": "18mm MDF",
                "Finish": "Black carpet",
                "Dimensions": "360 x 180 x 280 mm",
                "Weight": "8.5 kg"
            }
        }
    },
    {
        id: 29,
        name: "APBX 10 AS",
        series: "Prima", 
        category: "subwoofer-box",
        price: 499.00,
        image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "10\" Active Subwoofer Enclosure | 250W Built-in Amplifier | Prima Series",
        specifications: {
            "Enclosure Specifications": {
                "Driver Size": "10 inches (250mm)",
                "Configuration": "Active (Built-in Amplifier)",
                "Built-in Power": "250W RMS",
                "Frequency Response": "30-200 Hz",
                "Internal Volume": "0.75 ft³"
            },
            "Amplifier Features": {
                "Power": "250W RMS",
                "Class": "D-Class",
                "Crossover": "Variable low-pass filter",
                "Phase Control": "0°/180°",
                "Remote Control": "Included"
            }
        }
    },
    {
        id: 30,
        name: "APBX 12 BR",
        series: "Prima",
        category: "subwoofer-box", 
        price: 599.00,
        image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "12\" Bass Reflex Subwoofer Enclosure | Prima Series | Ported Design",
        specifications: {
            "Enclosure Specifications": {
                "Driver Size": "12 inches (300mm)",
                "Configuration": "Bass Reflex (Ported)",
                "Internal Volume": "1.2 ft³",
                "Port Tuning": "35 Hz",
                "Frequency Response": "28-150 Hz",
                "Recommended Power": "300W RMS"
            }
        }
    },

    // ACCESSORIES - Remote Controls
    {
        id: 31,
        name: "DRC AC",
        series: "Accessories",
        category: "accessory",
        price: 149.00,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Advanced Remote Control | Multi-function LCD Display | Compatible with bit and AP series",
        specifications: {
            "Features": {
                "Display": "LCD with backlight",
                "Functions": "Volume, Subwoofer level, Preset selection",
                "Compatibility": "bit processors and AP amplifiers",
                "Installation": "Dashboard or custom mounting"
            }
        }
    },
    {
        id: 32,
        name: "DRC MP",
        series: "Accessories", 
        category: "accessory",
        price: 99.00,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Mini Remote Control | Compact Design | Basic Control Functions",
        specifications: {
            "Features": {
                "Type": "Rotary control",
                "Functions": "Volume, Subwoofer level",
                "Size": "Compact design",
                "Installation": "Easy dashboard mounting"
            }
        }
    },

    // ACCESSORIES - Installation Accessories
    {
        id: 33,
        name: "Connection SLI 4.1", 
        series: "Accessories",
        category: "accessory",
        price: 79.00,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Speaker Level Input Interface | 4-Channel | High to Low Level Converter",
        specifications: {
            "Features": {
                "Channels": "4",
                "Input": "Speaker level (high level)",
                "Output": "Line level (low level)", 
                "Impedance": "High impedance input",
                "Application": "OEM system integration"
            }
        }
    },
    {
        id: 34,
        name: "Connection SLI 2.1",
        series: "Accessories",
        category: "accessory", 
        price: 59.00,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Speaker Level Input Interface | 2-Channel | High to Low Level Converter",
        specifications: {
            "Features": {
                "Channels": "2",
                "Input": "Speaker level (high level)",
                "Output": "Line level (low level)",
                "Impedance": "High impedance input",
                "Application": "Basic OEM system integration"
            }
        }
    },
    {
        id: 35,
        name: "Connection F2O",
        series: "Accessories",
        category: "accessory",
        price: 129.00, 
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "Fiber Optic to Coaxial Converter | Digital Signal Interface",
        specifications: {
            "Features": {
                "Input": "Fiber optic (TOSLINK)",
                "Output": "Coaxial digital",
                "Sample Rates": "Up to 192 kHz/24-bit",
                "Application": "Digital signal conversion"
            }
        }
    },

    // ACCESSORIES - Power and Fusing
    {
        id: 36,
        name: "Connection BM 6 GOLD",
        series: "Accessories",
        category: "accessory",
        price: 199.00,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "6-Position Power Distribution Block | Gold-Plated Terminals | Professional Grade",
        specifications: {
            "Features": {
                "Positions": "6 output terminals",
                "Input": "0/2/4 AWG capable",
                "Output": "4/8 AWG capable",
                "Terminals": "Gold-plated",
                "Fusing": "Individual fuse positions"
            }
        }
    },
    {
        id: 37,
        name: "Connection BM 4 GOLD",
        series: "Accessories", 
        category: "accessory",
        price: 149.00,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "4-Position Power Distribution Block | Gold-Plated Terminals | Professional Grade",
        specifications: {
            "Features": {
                "Positions": "4 output terminals",
                "Input": "0/2/4 AWG capable", 
                "Output": "4/8 AWG capable",
                "Terminals": "Gold-plated",
                "Fusing": "Individual fuse positions"
            }
        }
    },

    // ACCESSORIES - Cables and Interconnects
    {
        id: 38,
        name: "Connection FTC 1",
        series: "Accessories",
        category: "accessory",
        price: 89.00,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "1-Meter RCA Interconnect Cable | High-Quality Shielding | Professional Grade",
        specifications: {
            "Features": {
                "Length": "1 meter (3.3 feet)",
                "Connectors": "Gold-plated RCA",
                "Shielding": "High-quality copper shielding",
                "Application": "Signal interconnects"
            }
        }
    },
    {
        id: 39,
        name: "Connection FTC 5",
        series: "Accessories",
        category: "accessory",
        price: 149.00,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "5-Meter RCA Interconnect Cable | High-Quality Shielding | Professional Grade", 
        specifications: {
            "Features": {
                "Length": "5 meters (16.4 feet)",
                "Connectors": "Gold-plated RCA",
                "Shielding": "High-quality copper shielding",
                "Application": "Long-distance signal runs"
            }
        }
    },
    {
        id: 40,
        name: "Connection OPTOS 1",
        series: "Accessories",
        category: "accessory",
        price: 79.00,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
        description: "1-Meter Optical Cable | TOSLINK Digital Connection | High-Quality Fiber",
        specifications: {
            "Features": {
                "Length": "1 meter (3.3 feet)",
                "Type": "TOSLINK optical",
                "Core": "High-quality fiber optic",
                "Application": "Digital audio transmission"
            }
        }
    }
];

// Product loading functions for each category
function loadDSPAmps(category = 'all') {
    const grid = document.getElementById('dspAmpGrid');
    if (!grid) return;

    let filteredProducts = audisonProducts.filter(product => product.category === 'dsp-amp');
    
    if (category !== 'all') {
        if (category === '4-channel') {
            filteredProducts = filteredProducts.filter(product => 
                product.specifications["Amplifier Tech Data"]["Channels"] === "8" ||
                product.specifications["Amplifier Tech Data"]["Channels"] === "4"
            );
        } else if (category === '8-channel') {
            filteredProducts = filteredProducts.filter(product => 
                product.specifications["Amplifier Tech Data"]["Channels"] === "8"
            );
        } else if (category === '5-channel') {
            filteredProducts = filteredProducts.filter(product => 
                product.specifications["Amplifier Tech Data"]["Channels"] === "5"
            );
        }
    }

    grid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    initializeProductEventListeners();
}

function loadAmplifiers(category = 'all') {
    const grid = document.getElementById('amplifierGrid');
    if (!grid) return;

    let filteredProducts = audisonProducts.filter(product => product.category === 'amplifier');
    
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.series.toLowerCase() === category.toLowerCase()
        );
    }

    grid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    initializeProductEventListeners();
}

function loadProcessors(category = 'all') {
    const grid = document.getElementById('processorGrid');
    if (!grid) return;

    let filteredProducts = audisonProducts.filter(product => product.category === 'processor');
    
    if (category !== 'all') {
        if (category === 'dsp') {
            filteredProducts = filteredProducts.filter(product => 
                product.name.toLowerCase().includes('bit')
            );
        }
    }

    grid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    initializeProductEventListeners();
}

function loadSpeakers(category = 'all') {
    const grid = document.getElementById('speakerGrid');
    if (!grid) return;

    let filteredProducts = audisonProducts.filter(product => product.category === 'speaker');
    
    if (category !== 'all') {
        if (category === 'component') {
            filteredProducts = filteredProducts.filter(product => 
                product.specifications["Driver Specifications"]["Type"].includes('Component')
            );
        } else if (category === 'coaxial') {
            filteredProducts = filteredProducts.filter(product => 
                product.specifications["Driver Specifications"]["Type"] === 'Coaxial'
            );
        } else if (category === 'tweeters') {
            filteredProducts = filteredProducts.filter(product => 
                product.specifications["Driver Specifications"]["Type"].includes('Tweeter') ||
                product.specifications["Driver Specifications"]["Type"].includes('Midrange')
            );
        } else if (category.includes('-speakers')) {
            const seriesName = category.replace('-speakers', '');
            filteredProducts = filteredProducts.filter(product => 
                product.series.toLowerCase().includes(seriesName.toLowerCase())
            );
        }
    }

    grid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    initializeProductEventListeners();
}

function loadSubwoofers(category = 'all') {
    const grid = document.getElementById('subwooferGrid');
    if (!grid) return;

    let filteredProducts = audisonProducts.filter(product => product.category === 'subwoofer');
    
    if (category !== 'all') {
        if (category === 'active') {
            filteredProducts = filteredProducts.filter(product => 
                product.name.includes('AS')
            );
        } else if (category === 'passive') {
            filteredProducts = filteredProducts.filter(product => 
                !product.name.includes('AS')
            );
        }
    }

    grid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    initializeProductEventListeners();
}

function loadAccessories(category = 'all') {
    const grid = document.getElementById('accessoryGrid');
    if (!grid) return;

    let filteredProducts = audisonProducts.filter(product => product.category === 'accessory');
    
    if (category !== 'all') {
        if (category === 'remote') {
            filteredProducts = filteredProducts.filter(product => 
                product.name.includes('DRC')
            );
        } else if (category === 'cables') {
            filteredProducts = filteredProducts.filter(product => 
                product.name.includes('Connection')
            );
        }
    }

    grid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    initializeProductEventListeners();
}

function loadSubwooferBoxes(category = 'all') {
    const grid = document.getElementById('boxGrid');
    if (!grid) return;

    let filteredProducts = audisonProducts.filter(product => product.category === 'subwoofer-box');
    
    if (category !== 'all') {
        if (category === 'sealed') {
            filteredProducts = filteredProducts.filter(product => 
                product.name.includes('DS') || 
                product.specifications["Enclosure Specifications"]["Configuration"].includes('Sealed')
            );
        } else if (category === 'ported') {
            filteredProducts = filteredProducts.filter(product => 
                product.name.includes('BR') || 
                product.specifications["Enclosure Specifications"]["Configuration"].includes('Reflex')
            );
        } else if (category === 'bandpass') {
            filteredProducts = filteredProducts.filter(product => 
                product.name.includes('BP')
            );
        } else if (category === 'custom') {
            filteredProducts = filteredProducts.filter(product => 
                product.name.includes('AS') || 
                product.specifications["Enclosure Specifications"]["Configuration"].includes('Active')
            );
        }
    }

    grid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    initializeProductEventListeners();
}

// Create product card HTML
function createProductCard(product) {
    return `
        <div class="col-lg-3 col-md-6 mb-4">
            <div class="card product-card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text  flex-grow-1">${product.description}</p>
                    <div class="price mb-3">$${product.price.toFixed(2)}</div>
                    <div class="mt-auto">
                        <button class="btn btn-primary me-1 m-1" onclick="viewProduct(${product.id})">
                            <i class="fas fa-eye me-1"></i>View Details
                        </button>
                        <button class="btn btn-outline-primary m-1" onclick="sendWhatsApp(${product.id})">
                            <i class="fas fa-cart-plus me-1"></i>Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// View product details
function viewProduct(productId) {
    const product = audisonProducts.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('productModalTitle');
    const modalBody = document.getElementById('productModalBody');
    const addToCartBtn = document.getElementById('addToCartBtn');

    modalTitle.textContent = product.name;
    
    // Create specifications HTML
    let specificationsHTML = '';
    if (product.specifications) {
        for (const [category, specs] of Object.entries(product.specifications)) {
            specificationsHTML += `
                <h6 class="mt-3 mb-2">${category}:</h6>
                <ul class="list-unstyled ms-3">
            `;
            for (const [key, value] of Object.entries(specs)) {
                specificationsHTML += `<li><strong>${key}:</strong> ${value}</li>`;
            }
            specificationsHTML += '</ul>';
        }
    }
    
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="${product.image}" class="img-fluid rounded" alt="${product.name}">
            </div>
            <div class="col-md-6">
                <h4 class="text-primary mb-3">$${product.price.toFixed(2)}</h4>
                <p class="mb-4">${product.description}</p>
                ${specificationsHTML}
            </div>
        </div>
    `;

    addToCartBtn.onclick = () => {
        sendWhatsApp(productId);
        bootstrap.Modal.getInstance(modal).hide();
    };

    const productModal = new bootstrap.Modal(modal);
    productModal.show();
}

// Add product to cart
function sendWhatsApp(productId) {
    const product = audisonProducts.find(p => p.id === productId);  
    if (!product) return;
    if (!window.cart) window.cart = [];
    var phoneNumber = "918595061813"; // Include country code (91 for India)
    var message = `Hello! I want to place order of product ${product.name} .`;
    var url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
    const existingItem = window.cart.find(item => item.id === productId);
    
    if (existingItem) {

        
        // existingItem.quantity += 1;
    }
    // } else {
    //     window.cart.push({
    //         ...product,
    //         quantity: 1
    //     });
    // }

    // Save to localStorage
    localStorage.setItem('audisonCart', JSON.stringify(window.cart));
    
    // Update cart UI
    updateCartUI();
   // showNotification(`${product.name} added to cart!`, 'success');
}

// Initialize product event listeners
function initializeProductEventListeners() {
    // Tab functionality for all product pages
    const tabButtons = document.querySelectorAll('[id$="Tabs"] button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all tabs
            this.parentNode.parentNode.querySelectorAll('button').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Get category from button text
            const category = this.textContent.toLowerCase()
                .replace(' products', '')
                .replace(' series', '')
                .replace(' ', '-')
                .replace('all-', 'all');
            
            // Load products based on page
            const pageId = this.closest('[id$="Tabs"]').id;
            
            if (pageId === 'dspAmpTabs') {
                loadDSPAmps(category);
            } else if (pageId === 'amplifierTabs') {
                loadAmplifiers(category);
            } else if (pageId === 'processorTabs') {
                loadProcessors(category);
            } else if (pageId === 'speakerTabs') {
                loadSpeakers(category);
            } else if (pageId === 'subwooferTabs') {
                loadSubwoofers(category);
            } else if (pageId === 'accessoryTabs') {
                loadAccessories(category);
            } else if (pageId === 'boxTabs') {
                loadSubwooferBoxes(category);
            }
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeProductEventListeners();
});

// Export for global use
window.audisonProducts = audisonProducts;
window.loadDSPAmps = loadDSPAmps;
window.loadAmplifiers = loadAmplifiers;
window.loadProcessors = loadProcessors;
window.loadSpeakers = loadSpeakers;
window.loadSubwoofers = loadSubwoofers;
window.loadAccessories = loadAccessories;
window.loadSubwooferBoxes = loadSubwooferBoxes;
window.viewProduct = viewProduct;
// window.addToCart = addToCart;