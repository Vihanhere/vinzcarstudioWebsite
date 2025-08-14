// Complete Audison product database with all categories

const products = {
    amplifiers: [
        // Thesis Series
        {
            id: 1,
            name: "Thesis TH Uno",
            series: "thesis",
            price: 2499.00,
            image: "images/Audison_Thesis_TH_uno_emo_total.jpg",
            description: "Ultra-high performance mono amplifier with advanced thermal management and pristine sound quality.",
            specifications: {
                "Power Output": "1 x 1000W RMS @ 2Ω",
                "Frequency Response": "10Hz - 30kHz",
                "THD": "< 0.05%",
                "Signal-to-Noise Ratio": "> 100dB",
                "Dimensions": "320 x 240 x 65mm"
            }
        },
        {
            id: 2,
            name: "Thesis TH Due",
            series: "thesis",
            price: 1899.00,
            image: "images/Audison_Thesis_TH_due_emo_total.jpg",
            description: "High-performance 2-channel amplifier featuring Class D efficiency with audiophile sound quality.",
            specifications: {
                "Power Output": "2 x 500W RMS @ 2Ω",
                "Frequency Response": "10Hz - 30kHz",
                "THD": "< 0.05%",
                "Signal-to-Noise Ratio": "> 100dB",
                "Dimensions": "320 x 240 x 65mm"
            }
        },
        {
            id: 3,
            name: "Thesis TH Quattro",
            series: "thesis",
            price: 2199.00,
            image: "images/Audison_Thesis_TH_quattro_emo_total.jpg",
            description: "4-channel reference amplifier with uncompromising performance.",
            specifications: {
                "Power Output": "4 x 250W RMS @ 4Ω",
                "Frequency Response": "10Hz - 30kHz",
                "THD": "< 0.05%",
                "Signal-to-Noise Ratio": "> 100dB",
                "Dimensions": "320 x 240 x 65mm"
            }
        },
        {
            id: 76,
            name: "Thesis HV venti",
            series: "thesis",
            price: 2199.00,
            image: "images/Audison-Thesis_HV_Venti-.jpg",
            description: "The Dual Mono configuration of the HV Venti uses four Synchro-PWM power supplies that ensure an extremely fast response to current transients, enhancing sound quality.",
            specifications: {   
                "Power Output": "2 x 800W RMS @ 2Ω",
                "Frequency Response": "4Hz - 75kHz",
                "THD": "< 0.05%",
                "Signal-to-Noise Ratio": "> 100dB",
                "Dimensions": "510 x 85 x 280mm"
            }
        },
        // Prima Series
        {
            id: 4,
            name: "Prima AP 4.9 bit",
            series: "prima",
            price: 899.00,
            image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "4-channel amplifier with integrated DSP and advanced tuning capabilities.",
            specifications: {
                "Power Output": "4 x 90W RMS @ 4Ω",
                "Frequency Response": "20Hz - 20kHz",
                "THD": "< 0.1%",
                "Signal-to-Noise Ratio": "> 95dB",
                "Dimensions": "280 x 200 x 55mm"
            }
        },
        {
            id: 5,
            name: "Prima AP 8.9 bit",
            series: "prima",
            price: 1299.00,
            image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "8-channel amplifier with built-in DSP for complete system control.",
            specifications: {
                "Power Output": "8 x 90W RMS @ 4Ω",
                "Frequency Response": "20Hz - 20kHz",
                "THD": "< 0.1%",
                "Signal-to-Noise Ratio": "> 95dB",
                "Dimensions": "320 x 240 x 55mm"
            }
        },
        {
            id: 6,
            name: "Prima AP 1 D",
            series: "prima",
            price: 649.00,
            image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Mono amplifier optimized for subwoofer applications.",
            specifications: {
                "Power Output": "1 x 600W RMS @ 2Ω",
                "Frequency Response": "10Hz - 500Hz",
                "THD": "< 0.1%",
                "Signal-to-Noise Ratio": "> 95dB",
                "Dimensions": "280 x 200 x 55mm"
            }
        },
        // Forza Series
        {
            id: 7,
            name: "Forza AF M2",
            series: "forza",
            price: 599.00,
            image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Compact mono amplifier perfect for subwoofer applications.",
            specifications: {
                "Power Output": "1 x 600W RMS @ 2Ω",
                "Frequency Response": "20Hz - 250Hz",
                "THD": "< 0.1%",
                "Signal-to-Noise Ratio": "> 90dB",
                "Dimensions": "240 x 180 x 50mm"
            }
        },
        {
            id: 8,
            name: "Forza AF M4",
            series: "forza",
            price: 799.00,
            image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "4-channel amplifier offering excellent value and performance.",
            specifications: {
                "Power Output": "4 x 150W RMS @ 4Ω",
                "Frequency Response": "20Hz - 20kHz",
                "THD": "< 0.1%",
                "Signal-to-Noise Ratio": "> 90dB",
                "Dimensions": "280 x 200 x 50mm"
            }
        },
        {
            id: 9,
            name: "Forza AF M5",
            series: "forza",
            price: 899.00,
            image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "5-channel amplifier with dedicated subwoofer channel.",
            specifications: {
                "Power Output": "4 x 100W + 1 x 300W RMS @ 4Ω",
                "Frequency Response": "20Hz - 20kHz",
                "THD": "< 0.1%",
                "Signal-to-Noise Ratio": "> 90dB",
                "Dimensions": "320 x 200 x 50mm"
            }
        }
    ],
    dspAmps: [
        {
            id: 50,
            name: "Prima AP 4.9 bit",
            category: "dsp-amp",
            price: 899.00,
            image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "4-channel amplifier with integrated 32-bit DSP processor.",
            specifications: {
                "Power Output": "4 x 90W RMS @ 4Ω",
                "DSP": "32-bit floating point",
                "Channels": "8 input / 4 output",
                "EQ": "31-band parametric per channel",
                "Crossover": "Full range, HP, LP, BP"
            }
        },
        {
            id: 51,
            name: "Prima AP 8.9 bit",
            category: "dsp-amp",
            price: 1299.00,
            image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "8-channel amplifier with advanced DSP capabilities.",
            specifications: {
                "Power Output": "8 x 90W RMS @ 4Ω",
                "DSP": "32-bit floating point",
                "Channels": "8 input / 8 output",
                "EQ": "31-band parametric per channel",
                "Time Alignment": "0-20ms per channel"
            }
        },
        {
            id: 52,
            name: "Prima AP 5.9 bit",
            category: "dsp-amp",
            price: 1099.00,
            image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "5-channel DSP amplifier with dedicated subwoofer channel.",
            specifications: {
                "Power Output": "4 x 90W + 1 x 300W RMS @ 4Ω",
                "DSP": "32-bit floating point",
                "Channels": "6 input / 5 output",
                "EQ": "31-band parametric per channel",
                "Bass Management": "Advanced subwoofer control"
            }
        }
    ],
    speakers: [
        // Thesis Series Speakers
        {
            id: 10,
            name: "Thesis TH 6.5 II",
            category: "component",
            series: "thesis",
            price: 1899.00,
            image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Reference 6.5-inch component system with silk dome tweeter.",
            specifications: {
                "Size": "6.5 inches (165mm)",
                "Power Handling": "150W RMS",
                "Frequency Response": "40Hz - 25kHz",
                "Sensitivity": "93dB",
                "Impedance": "4Ω"
            }
        },
        {
            id: 11,
            name: "Thesis TH 3.0 II",
            category: "component",
            series: "thesis",
            price: 1299.00,
            image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "3-inch midrange driver for ultimate sound staging.",
            specifications: {
                "Size": "3 inches (80mm)",
                "Power Handling": "80W RMS",
                "Frequency Response": "80Hz - 8kHz",
                "Sensitivity": "91dB",
                "Impedance": "4Ω"
            }
        },
        // Prima Series Speakers
        {
            id: 12,
            name: "Prima AP 6.5",
            category: "component",
            series: "prima",
            price: 899.00,
            image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Premium 6.5-inch component speakers with silk dome tweeters.",
            specifications: {
                "Size": "6.5 inches (165mm)",
                "Power Handling": "120W RMS",
                "Frequency Response": "45Hz - 22kHz",
                "Sensitivity": "92dB",
                "Impedance": "4Ω"
            }
        },
        {
            id: 13,
            name: "Prima AP 5.25",
            category: "component",
            series: "prima",
            price: 699.00,
            image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "5.25-inch component speakers with optimized crossover design.",
            specifications: {
                "Size": "5.25 inches (130mm)",
                "Power Handling": "100W RMS",
                "Frequency Response": "55Hz - 22kHz",
                "Sensitivity": "90dB",
                "Impedance": "4Ω"
            }
        },
        {
            id: 14,
            name: "Prima APX 6.5",
            category: "coaxial",
            series: "prima",
            price: 399.00,
            image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "6.5-inch coaxial speakers with integrated tweeter.",
            specifications: {
                "Size": "6.5 inches (165mm)",
                "Power Handling": "80W RMS",
                "Frequency Response": "50Hz - 20kHz",
                "Sensitivity": "90dB",
                "Impedance": "4Ω"
            }
        },
        {
            id: 15,
            name: "Prima APX 5.25",
            category: "coaxial",
            series: "prima",
            price: 299.00,
            image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "5.25-inch coaxial speakers for easy installation.",
            specifications: {
                "Size": "5.25 inches (130mm)",
                "Power Handling": "60W RMS",
                "Frequency Response": "60Hz - 20kHz",
                "Sensitivity": "88dB",
                "Impedance": "4Ω"
            }
        },
        {
            id: 16,
            name: "Prima AP 1",
            category: "tweeters",
            series: "prima",
            price: 199.00,
            image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "High-quality silk dome tweeter for superior high-frequency reproduction.",
            specifications: {
                "Size": "1 inch (25mm)",
                "Power Handling": "50W RMS",
                "Frequency Response": "2kHz - 25kHz",
                "Sensitivity": "92dB",
                "Impedance": "4Ω"
            }
        },
        // Voce Series
        {
            id: 17,
            name: "Voce AV 6.5",
            category: "component",
            series: "voce",
            price: 549.00,
            image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "6.5-inch component system with excellent value proposition.",
            specifications: {
                "Size": "6.5 inches (165mm)",
                "Power Handling": "90W RMS",
                "Frequency Response": "50Hz - 20kHz",
                "Sensitivity": "90dB",
                "Impedance": "4Ω"
            }
        },
        {
            id: 18,
            name: "Voce AVX 6.5",
            category: "coaxial",
            series: "voce",
            price: 249.00,
            image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "6.5-inch coaxial speakers with balanced sound signature.",
            specifications: {
                "Size": "6.5 inches (165mm)",
                "Power Handling": "70W RMS",
                "Frequency Response": "55Hz - 20kHz",
                "Sensitivity": "89dB",
                "Impedance": "4Ω"
            }
        }
    ],
    processors: [
        {
            id: 30,
            name: "Bit Ten D",
            category: "dsp",
            price: 1299.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Advanced digital signal processor with comprehensive tuning capabilities and OEM integration.",
            specifications: {
                "Channels": "8 Input / 8 Output",
                "Resolution": "24-bit / 96kHz",
                "Delay": "0-20ms per channel",
                "EQ Bands": "31-band per channel",
                "Crossover": "Full range, High-pass, Low-pass, Band-pass"
            }
        },
        {
            id: 31,
            name: "Bit Nine",
            category: "dsp",
            price: 999.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "9-channel DSP with advanced sound processing algorithms.",
            specifications: {
                "Channels": "6 Input / 9 Output",
                "Resolution": "24-bit / 48kHz",
                "Delay": "0-15ms per channel",
                "EQ Bands": "15-band per channel",
                "Crossover": "Full range, High-pass, Low-pass"
            }
        },
        {
            id: 32,
            name: "Bit Play HD",
            category: "media",
            price: 799.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Digital media player with integrated DSP and high-resolution audio support.",
            specifications: {
                "Channels": "2 Input / 6 Output",
                "Resolution": "24-bit / 192kHz",
                "Formats": "FLAC, WAV, MP3, AAC",
                "Storage": "USB, SD Card",
                "Connectivity": "Bluetooth, Wi-Fi"
            }
        },
        {
            id: 33,
            name: "Bit DMI",
            category: "interface",
            price: 599.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Digital media interface for seamless OEM integration.",
            specifications: {
                "Channels": "2 Input / 2 Output",
                "Resolution": "24-bit / 48kHz",
                "Compatibility": "Most OEM systems",
                "Features": "Steering wheel control retention",
                "Installation": "Plug and play"
            }
        },
        {
            id: 34,
            name: "Bit Tune",
            category: "interface",
            price: 399.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Compact tuning interface for Audison amplifiers.",
            specifications: {
                "Compatibility": "All Audison amplifiers",
                "Display": "OLED color display",
                "Controls": "Rotary encoder with push button",
                "Installation": "Dashboard or console mount",
                "Cable Length": "6 meters"
            }
        }
    ],
    subwoofers: [
        // Active Subwoofers
        {
            id: 40,
            name: "Prima APBX 12 AS",
            category: "active",
            price: 1199.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "12-inch active subwoofer with built-in amplifier and advanced bass management.",
            specifications: {
                "Size": "12 inches (300mm)",
                "Power": "500W RMS",
                "Frequency Response": "20Hz - 200Hz",
                "Enclosure": "Sealed",
                "Dimensions": "350 x 350 x 400mm"
            }
        },
        {
            id: 41,
            name: "Prima APBX 10 AS",
            category: "active",
            price: 899.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "10-inch active subwoofer ideal for smaller vehicles.",
            specifications: {
                "Size": "10 inches (250mm)",
                "Power": "350W RMS",
                "Frequency Response": "25Hz - 200Hz",
                "Enclosure": "Sealed",
                "Dimensions": "300 x 300 x 350mm"
            }
        },
        {
            id: 42,
            name: "Prima APBX 8 AS",
            category: "active",
            price: 699.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Compact 8-inch active subwoofer for tight installations.",
            specifications: {
                "Size": "8 inches (200mm)",
                "Power": "250W RMS",
                "Frequency Response": "30Hz - 200Hz",
                "Enclosure": "Sealed",
                "Dimensions": "250 x 250 x 300mm"
            }
        },
        // Passive Subwoofers
        {
            id: 43,
            name: "Prima APS 12",
            category: "passive",
            price: 699.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "12-inch passive subwoofer with high power handling.",
            specifications: {
                "Size": "12 inches (300mm)",
                "Power Handling": "600W RMS",
                "Frequency Response": "20Hz - 500Hz",
                "Voice Coil": "Dual 4Ω",
                "Mounting Depth": "120mm"
            }
        },
        {
            id: 44,
            name: "Prima APS 10",
            category: "passive",
            price: 499.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "10-inch passive subwoofer with excellent musicality.",
            specifications: {
                "Size": "10 inches (250mm)",
                "Power Handling": "400W RMS",
                "Frequency Response": "25Hz - 500Hz",
                "Voice Coil": "Dual 4Ω",
                "Mounting Depth": "100mm"
            }
        },
        {
            id: 45,
            name: "Prima APS 8",
            category: "passive",
            price: 349.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "8-inch passive subwoofer perfect for tight spaces.",
            specifications: {
                "Size": "8 inches (200mm)",
                "Power Handling": "250W RMS",
                "Frequency Response": "30Hz - 500Hz",
                "Voice Coil": "Single 4Ω",
                "Mounting Depth": "80mm"
            }
        },
        // Thesis Series Subwoofers
        {
            id: 46,
            name: "Thesis TH 12",
            category: "passive",
            price: 1299.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Reference 12-inch subwoofer with exceptional build quality.",
            specifications: {
                "Size": "12 inches (300mm)",
                "Power Handling": "800W RMS",
                "Frequency Response": "18Hz - 500Hz",
                "Voice Coil": "Dual 2Ω",
                "Mounting Depth": "140mm"
            }
        },
        {
            id: 47,
            name: "Thesis TH 10",
            category: "passive",
            price: 999.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Reference 10-inch subwoofer with precise bass reproduction.",
            specifications: {
                "Size": "10 inches (250mm)",
                "Power Handling": "600W RMS",
                "Frequency Response": "22Hz - 500Hz",
                "Voice Coil": "Dual 2Ω",
                "Mounting Depth": "120mm"
            }
        }
    ],
    accessories: [
        {
            id: 60,
            name: "DRC AB",
            category: "remote",
            price: 199.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Digital remote control for Audison amplifiers and processors.",
            specifications: {
                "Display": "OLED color display",
                "Functions": "Volume, source, preset selection",
                "Installation": "Dashboard mount",
                "Cable Length": "6 meters",
                "Compatibility": "All Audison products"
            }
        },
        {
            id: 61,
            name: "DRC MP",
            category: "remote",
            price: 149.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Compact digital remote control with essential functions.",
            specifications: {
                "Display": "LED indicators",
                "Functions": "Volume, mute, preset",
                "Installation": "Dashboard or console",
                "Cable Length": "4 meters",
                "Size": "Compact design"
            }
        },
        {
            id: 62,
            name: "Connection SLI 4",
            category: "cables",
            price: 89.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "High-quality 4-channel RCA interconnect cable.",
            specifications: {
                "Channels": "4 (2 stereo pairs)",
                "Length": "5 meters",
                "Connectors": "Gold-plated RCA",
                "Shielding": "Double shielding",
                "Construction": "OFC copper conductors"
            }
        },
        {
            id: 63,
            name: "Connection SLI 2",
            category: "cables",
            price: 59.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Premium 2-channel RCA interconnect cable.",
            specifications: {
                "Channels": "2 (1 stereo pair)",
                "Length": "5 meters",
                "Connectors": "Gold-plated RCA",
                "Shielding": "Triple shielding",
                "Construction": "OFC copper conductors"
            }
        },
        {
            id: 64,
            name: "Connection FPK 4",
            category: "cables",
            price: 129.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "4 AWG power cable kit for high-power installations.",
            specifications: {
                "Wire Gauge": "4 AWG",
                "Length": "5 meters power + 1 meter ground",
                "Fuse": "150A ANL fuse included",
                "Terminals": "Gold-plated terminals",
                "Jacket": "Flexible PVC jacket"
            }
        },
        {
            id: 65,
            name: "Connection FPK 8",
            category: "cables",
            price: 89.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "8 AWG power cable kit for medium-power systems.",
            specifications: {
                "Wire Gauge": "8 AWG",
                "Length": "5 meters power + 1 meter ground",
                "Fuse": "80A ANL fuse included",
                "Terminals": "Nickel-plated terminals",
                "Jacket": "Flexible PVC jacket"
            }
        }
    ],
    subwooferBoxes: [
        {
            id: 70,
            name: "APBX 12 DS",
            category: "sealed",
            price: 399.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Sealed enclosure designed for 12-inch Prima subwoofers.",
            specifications: {
                "Type": "Sealed enclosure",
                "Volume": "35 liters",
                "Compatibility": "Prima APS 12",
                "Material": "18mm MDF",
                "Finish": "Black carpet"
            }
        },
        {
            id: 71,
            name: "APBX 10 DS",
            category: "sealed",
            price: 299.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Sealed enclosure optimized for 10-inch Prima subwoofers.",
            specifications: {
                "Type": "Sealed enclosure",
                "Volume": "25 liters",
                "Compatibility": "Prima APS 10",
                "Material": "15mm MDF",
                "Finish": "Black carpet"
            }
        },
        {
            id: 72,
            name: "APBX 12 DR",
            category: "ported",
            price: 449.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Ported enclosure for enhanced bass output with 12-inch drivers.",
            specifications: {
                "Type": "Ported enclosure",
                "Volume": "45 liters",
                "Port Tuning": "35Hz",
                "Compatibility": "Prima APS 12",
                "Material": "18mm MDF"
            }
        },
        {
            id: 73,
            name: "APBX 10 DR",
            category: "ported",
            price: 349.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Ported enclosure designed for 10-inch subwoofer applications.",
            specifications: {
                "Type": "Ported enclosure",
                "Volume": "30 liters",
                "Port Tuning": "38Hz",
                "Compatibility": "Prima APS 10",
                "Material": "15mm MDF"
            }
        },
        {
            id: 74,
            name: "APBX 8 DS",
            category: "sealed",
            price: 199.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Compact sealed enclosure for 8-inch subwoofers.",
            specifications: {
                "Type": "Sealed enclosure",
                "Volume": "15 liters",
                "Compatibility": "Prima APS 8",
                "Material": "12mm MDF",
                "Finish": "Black carpet"
            }
        },
        {
            id: 75,
            name: "Custom Enclosure Service",
            category: "custom",
            price: 599.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Custom-built enclosure service for specific vehicle applications.",
            specifications: {
                "Type": "Custom design",
                "Material": "Premium MDF or fiberglass",
                "Finish": "Various options available",
                "Lead Time": "2-3 weeks",
                "Consultation": "Included"
            }
        }
    ],
    
};

// Initialize product pages
document.addEventListener('DOMContentLoaded', function() {
    initializeProductFiltering();
});

// Initialize product filtering for all pages
function initializeProductFiltering() {
    // Amplifier page filtering
    const amplifierTabs = document.querySelectorAll('#amplifierTabs button');
    amplifierTabs.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Remove active class from all buttons
            amplifierTabs.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterText = this.textContent.toLowerCase();
            let series = 'all';
            
            if (filterText.includes('thesis')) series = 'thesis';
            else if (filterText.includes('prima')) series = 'prima';
            else if (filterText.includes('forza')) series = 'forza';
            else if (filterText.includes('sr')) series = 'sr';
            else if (filterText.includes('voce')) series = 'voce';
            
            loadAmplifiers(series);
        });
    });

    // DSP Amp page filtering
    const dspAmpTabs = document.querySelectorAll('#dspAmpTabs button');
    dspAmpTabs.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            dspAmpTabs.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterText = this.textContent.toLowerCase();
            let category = 'all';
            
            if (filterText.includes('4-channel')) category = '4-channel';
            else if (filterText.includes('8-channel')) category = '8-channel';
            else if (filterText.includes('5-channel')) category = '5-channel';
            
            loadDSPAmps(category);
        });
    });

    // Speaker page filtering
    const speakerTabs = document.querySelectorAll('#speakerTabs button');
    speakerTabs.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            speakerTabs.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterText = this.textContent.toLowerCase();
            let category = 'all';
            let series = 'all';
            
            if (filterText.includes('component')) category = 'component';
            else if (filterText.includes('coaxial')) category = 'coaxial';
            else if (filterText.includes('tweeters')) category = 'tweeters';
            else if (filterText.includes('thesis')) series = 'thesis';
            else if (filterText.includes('prima')) series = 'prima';
            else if (filterText.includes('voce')) series = 'voce';
            
            loadSpeakers(category, series);
        });
    });

    // Processor page filtering
    const processorTabs = document.querySelectorAll('#processorTabs button');
    processorTabs.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            processorTabs.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterText = this.textContent.toLowerCase();
            let category = 'all';
            
            if (filterText.includes('dsp')) category = 'dsp';
            else if (filterText.includes('media')) category = 'media';
            else if (filterText.includes('interface')) category = 'interface';
            
            loadProcessors(category);
        });
    });

    // Subwoofer page filtering
    const subwooferTabs = document.querySelectorAll('#subwooferTabs button');
    subwooferTabs.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            subwooferTabs.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterText = this.textContent.toLowerCase();
            let category = 'all';
            
            if (filterText.includes('active')) category = 'active';
            else if (filterText.includes('passive')) category = 'passive';
            
            loadSubwoofers(category);
        });
    });

    // Accessories page filtering
    const accessoryTabs = document.querySelectorAll('#accessoryTabs button');
    accessoryTabs.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            accessoryTabs.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterText = this.textContent.toLowerCase();
            let category = 'all';
            
            if (filterText.includes('remote')) category = 'remote';
            else if (filterText.includes('cables')) category = 'cables';
            
            loadAccessories(category);
        });
    });

    // Subwoofer boxes page filtering
    const boxTabs = document.querySelectorAll('#boxTabs button');
    boxTabs.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            boxTabs.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterText = this.textContent.toLowerCase();
            let category = 'all';
            
            if (filterText.includes('sealed')) category = 'sealed';
            else if (filterText.includes('ported')) category = 'ported';
            else if (filterText.includes('custom')) category = 'custom';
            
            loadSubwooferBoxes(category);
        });
    });
}

// Load amplifiers with filtering
function loadAmplifiers(series = 'all') {
    const grid = document.getElementById('amplifierGrid');
    if (!grid) return;

    const filteredProducts = series === 'all' 
        ? products.amplifiers 
        : products.amplifiers.filter(product => product.series === series);

    grid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
}

// Load DSP amplifiers with filtering
function loadDSPAmps(category = 'all') {
    const grid = document.getElementById('dspAmpGrid');
    if (!grid) return;

    let filteredProducts = products.dspAmps;
    
    if (category === '4-channel') {
        filteredProducts = products.dspAmps.filter(product => product.name.includes('4.9'));
    } else if (category === '8-channel') {
        filteredProducts = products.dspAmps.filter(product => product.name.includes('8.9'));
    } else if (category === '5-channel') {
        filteredProducts = products.dspAmps.filter(product => product.name.includes('5.9'));
    }

    grid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
}

// Load speakers with filtering
function loadSpeakers(category = 'all', series = 'all') {
    const grid = document.getElementById('speakerGrid');
    if (!grid) return;

    let filteredProducts = products.speakers;
    
    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    
    if (series !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.series === series);
    }

    grid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
}

// Load processors with filtering
function loadProcessors(category = 'all') {
    const grid = document.getElementById('processorGrid');
    if (!grid) return;

    const filteredProducts = category === 'all' 
        ? products.processors 
        : products.processors.filter(product => product.category === category);

    grid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
}

// Load subwoofers with filtering
function loadSubwoofers(category = 'all') {
    const grid = document.getElementById('subwooferGrid');
    if (!grid) return;

    const filteredProducts = category === 'all' 
        ? products.subwoofers 
        : products.subwoofers.filter(product => product.category === category);

    grid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
}

// Load accessories with filtering
function loadAccessories(category = 'all') {
    const grid = document.getElementById('accessoryGrid');
    if (!grid) return;

    const filteredProducts = category === 'all' 
        ? products.accessories 
        : products.accessories.filter(product => product.category === category);

    grid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
}

// Load subwoofer boxes with filtering
function loadSubwooferBoxes(category = 'all') {
    const grid = document.getElementById('boxGrid');
    if (!grid) return;

    const filteredProducts = category === 'all' 
        ? products.subwooferBoxes 
        : products.subwooferBoxes.filter(product => product.category === category);

    grid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
}

// Create product card
function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 mb-4';
    
    col.innerHTML = `
        <div class="card product-card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text text-muted flex-grow-1">${product.description.substring(0, 100)}...</p>
                <div class="price mb-3">$${product.price.toFixed(2)}</div>
                <div class="mt-auto">
                    <button class="btn btn-primary me-2" onclick="viewProduct(${product.id})">
                        <i class="fas fa-eye me-1"></i>View Details
                    </button>
                    <button class="btn btn-outline-primary" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus me-1"></i>Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// View product details
function viewProduct(productId) {
    const product = findProductById(productId);
    if (!product) return;

    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('productModalTitle');
    const modalBody = document.getElementById('productModalBody');
    const addToCartBtn = document.getElementById('addToCartBtn');

    modalTitle.textContent = product.name;
    
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="${product.image}" class="img-fluid rounded" alt="${product.name}">
            </div>
            <div class="col-md-6">
                <h4 class="text-primary mb-3">$${product.price.toFixed(2)}</h4>
                <p class="mb-4">${product.description}</p>
                <h6>Specifications:</h6>
                <ul class="list-unstyled">
                    ${Object.entries(product.specifications).map(([key, value]) => 
                        `<li class="mb-1"><strong>${key}:</strong> ${value}</li>`
                    ).join('')}
                </ul>
            </div>
        </div>
    `;

    addToCartBtn.onclick = () => {
        addToCart(productId);
        bootstrap.Modal.getInstance(modal).hide();
    };

    const productModal = new bootstrap.Modal(modal);
    productModal.show();
}

// Add product to cart
function addToCart(productId) {
    const product = findProductById(productId);
    if (!product) return;

    if (!window.cart) window.cart = [];

    const existingItem = window.cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        window.cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showNotification(`${product.name} added to cart!`, 'success');
}

// Find product by ID
function findProductById(productId) {
    const allProducts = [
        ...products.amplifiers,
        ...products.dspAmps,
        ...products.speakers,
        ...products.processors,
        ...products.subwoofers,
        ...products.accessories,
        ...products.subwooferBoxes
    ];
    return allProducts.find(product => product.id === productId);
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('audisonCart', JSON.stringify(window.cart));
}