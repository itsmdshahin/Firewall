import { faArrowRightArrowLeft, faBan, faFaceFrown, faHand, faHome, faQrcode, faScaleBalanced, faVirusCovid, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, useWindowDimensions, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
// import BarChart from './BarChart';
import { TabView, SceneMap } from 'react-native-tab-view';

// const screenWidth = Dimensions.get('window').width;

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#383B3F',
  backgroundGradientTo: '#383B3F',
  color: (opacity = 1) => `rgba(246, 219, 86, 1)`,
  strokeWidth: 1,
  barPercentage: 1,
  
};

const graphStyle = {
  marginVertical: 16,
  // borderRadius: 16,
  // backgroundColor:'red',
};



const HomeScreen = () => {

  const FirstRoute = () => (
    <View style={styles.flexcontainer}>
      <View style={styles.box}>

        <View>
          <View>
            <View style={styles.TextHeader}>

              <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#F6DB56' }}> <FontAwesomeIcon icon={faWifi} style={{ color: "#fab005", }} /> WIFI Connection</Text>
              <Text style={{ color: '#fff' }}>Connection</Text>
            </View>
            <View style={styles.titleContainer}>
              <View>
                <Text style={{ color: 'gray' }} >Wifi Name : <Text style={{ color: '#F6DB56' }} >TechForing</Text> </Text>
                <Text style={{ color: 'gray' }}>Network : <Text style={{ color: '#fff' }} >Monitoring</Text> </Text>
                <Text style={{ color: 'gray' }}>Firewall: <Text style={{ color: '#fff' }} >Active</Text> </Text>
              </View>
              <View style={{ borderCurve: 'continuous', borderColor: '#F6DB56', borderWidth: 0.2, margin: 5, backgroundColor: 'yellow' }}></View>
              <View>
                <Text style={{ color: 'gray' }} >Wifi Name : <Text style={{ color: '#F6DB56' }} >TechForing</Text> </Text>
                <Text style={{ color: 'gray' }}>Network : <Text style={{ color: '#fff' }} >Monitoring</Text> </Text>
                <Text style={{ color: 'gray' }}>Firewall: <Text style={{ color: '#fff' }} >Active</Text> </Text>
              </View>
            </View>
            <View style={{ borderCurve: 'continuous', borderColor: '#F6DB56', borderWidth: 0.2, margin: 5, backgroundColor: 'yellow' }}></View>
          </View>
          <View>
            {/* <BarChart /> */}
            <BarChart
              style={graphStyle}
              data={data}
              width={360}
              height={120}
              yAxisLabel="$"
              chartConfig={chartConfig}
            // verticalLabelRotation={1}
            />
          </View>
        </View>

      </View>
      <View style={styles.topRow}>
        <View style={styles.box}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#F6DB56' }}>0</Text>
          <Text style={{ color: 'white' }} >Malicous</Text>
          {/* Content for the top-left box */}
        </View>
        <View style={styles.box}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#F6DB56' }}>13</Text>
          <Text style={{ color: 'white' }}>Ad Blocked</Text>
          {/* Content for the top-right box */}
        </View>
      </View>
      <View style={styles.bottomRow}>
        <View style={styles.box}>
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#F6DB56' }}>6</Text>
          <Text style={{ color: 'white' }} >Unwanted codes in QR</Text>
          {/* Content for the bottom-left box */}
        </View>
        <View style={styles.box}>
          {/* Content for the bottom-right box */}
          <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#F6DB56' }}>1</Text>
          <Text style={{ color: 'white' }} >Phishing/Scam</Text>
        </View>
      </View>
    </View>
  );


  const [isBoxVisible, setBoxVisibility] = useState(false);

  const toggleBox = () => {
    setBoxVisibility(!isBoxVisible);
  };
  // starting the setting app 
  const SecondRoute = () => (

    <View style={{ flex: 1, backgroundColor: 'black' }} >
      <View style={styles.containerSettings}>
        <View style={styles.SettingContainer}>
          <FontAwesomeIcon style={{ color: '#F6DB56' }} icon={faArrowRightArrowLeft} />
          <Text style={{ color: '#F6DB56' }} >Monitor Connection </Text>
          <TouchableOpacity onPress={toggleBox} style={styles.button}>
            <Text style={styles.buttonText}>{isBoxVisible ? 'Turn Off' : 'Turn On'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ borderCurve: 'continuous', borderColor: '#F6DB56', borderWidth: 0.2, margin: 5, backgroundColor: 'yellow' }}></View>
        <View style={styles.SettingContainer}>
          <FontAwesomeIcon style={{ color: '#F6DB56' }} icon={faVirusCovid} />
          <Text style={{ color: '#F6DB56' }} >Malicious Website Blocker</Text>
          <TouchableOpacity onPress={toggleBox} style={styles.button}>
            <Text style={styles.buttonText}>{isBoxVisible ? 'Turn Off' : 'Turn On'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ borderCurve: 'continuous', borderColor: '#F6DB56', borderWidth: 0.2, margin: 5, backgroundColor: 'yellow' }}></View>
        <View style={styles.SettingContainer}>
          <FontAwesomeIcon style={{ color: '#F6DB56' }} icon={faBan} />
          <Text style={{ color: '#F6DB56' }} >Ad Blocker </Text>
          <TouchableOpacity onPress={toggleBox} style={styles.button}>
            <Text style={styles.buttonText}>{isBoxVisible ? 'Turn Off' : 'Turn On'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ borderCurve: 'continuous', borderColor: '#F6DB56', borderWidth: 0.2, margin: 5, backgroundColor: 'yellow' }}></View>
        <View style={styles.SettingContainer}>
          <FontAwesomeIcon style={{ color: '#F6DB56' }} icon={faHand} />
          <Text style={{ color: '#F6DB56' }} > Block Persistent & Distracing Ads </Text>
          <TouchableOpacity onPress={toggleBox} style={styles.button}>
            <Text style={styles.buttonText}>{isBoxVisible ? 'Turn Off' : 'Turn On'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ borderCurve: 'continuous', borderColor: '#F6DB56', borderWidth: 0.2, margin: 5, backgroundColor: 'yellow' }}></View>
        <View style={styles.SettingContainer}>
          <FontAwesomeIcon style={{ color: '#F6DB56' }} icon={faFaceFrown} />
          <Text style={{ color: '#F6DB56' }} >Phishing/Scam Detection</Text>
          <TouchableOpacity onPress={toggleBox} style={styles.button}>
            <Text style={styles.buttonText}>{isBoxVisible ? 'Turn Off' : 'Turn On'}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ borderCurve: 'continuous', borderColor: '#F6DB56', borderWidth: 0.2, margin: 5, backgroundColor: 'yellow' }}></View>
        <View style={styles.SettingContainer}>
          <FontAwesomeIcon style={{ color: '#F6DB56' }} icon={faQrcode} />
          <Text style={{ color: '#F6DB56' }} >QR Code Scanner</Text>
          <TouchableOpacity onPress={toggleBox} style={styles.button}>
            <Text style={styles.buttonText}>{isBoxVisible ? 'Turn Off' : 'Turn On'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Dashbord' },
    { key: 'second', title: 'Settings' },

  ]);


  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleButtonPress = () => {
    // Handle button press action here
  };

  return (
    <View style={styles.container}>
      <View style={styles.btncontainer}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          // style={{ backgroundColor: 'red' }}
          activeColor={'white'}
          inactiveColor={'black'}

        />
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    color: '#F6DB56',
    flex: 1,
    backgroundColor: '#383B3F',
  },
  containerSettings: {
    flex: 1,
    backgroundColor: '#383B3F',

    // backgroundColor: '#222428',
    borderColor: '#000',
    // borderWidth: 1,
    borderRadius: 10,
    padding: 19,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 14,
    elevation: 3, // For Android shadow
    margin: 18,
    // justifyContent: 'center',
    // alignItems: 'center',

  },
  SettingContainer: {
    flex: 1,
    backgroundColor: '#383B3F',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btncontainer: {
    flex: 1,
    backgroundColor: '#404246',
    flexDirection: 'row',
  },
  btncontainers: {
    backgroundColor: '#404246',
    width: 150,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  flexcontainer: {
    flex: 1,
    position: 'relative',

  },


  topRow: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomRow: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  box: {
    flex: 1,
    backgroundColor: '#222428',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {

    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center'

  },
  TextHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  }
});

export default HomeScreen;
