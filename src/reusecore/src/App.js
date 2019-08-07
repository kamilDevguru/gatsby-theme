import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Icon } from 'react-icons-kit';
import { arrow_right } from 'react-icons-kit/ikons/arrow_right';
import Button from './elements/Button';
import Loader from './elements/Loader';
import Switch from './elements/Switch';
import Box from './elements/Box';
import Card from './elements/Card';
import Text from './elements/Text';
import Heading from './elements/Heading';
import Image from './elements/Image';
import DemoImage from './elements/Image/images.png';
import Link from './elements/Link';
import Checkbox from './elements/Checkbox';
// import CheckBoxGroup from './elements/Checkbox/checkbox.group';
import Radio from './elements/Radio';
import RangeBoxOld from './elements/Range-with-RC-SLIDE';
// import RangeBox from './elements/Range';
import DatePicker from './elements/DatePicker';
import DateRangePickerBox from './elements/DateRangePicker';

import Select from './elements/Select';
import Alert from './elements/Alert';
import optionsArray from './data';
import Drawer from './elements/Drawer';
import Tooltip from './elements/Tooltip';
import ListGrid from './elements/ListGrid';
import Input from './elements/Input';
import Logo from './elements/UI/Logo';

import FormikTest from './Examples/formikTest/index';

const App = () => {
  const [state, setState] = useState({
    drawerLeft: false,
    drawerRight: false
  });

  // drawerLeftHandler
  const drawerLeftHandler = () => {
    setState({
      drawerLeft: !state.drawerLeft
    });
  };

  // drawerRightHandler
  const drawerRightHandler = () => {
    setState({
      drawerRight: !state.drawerRight
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: '30px 71px' }}>
        <h2>Reuse core Components by RedQ, Inc.</h2>
        <br />
        <h3> Input Filed</h3>
        <br />
        <div style={{ width: '300px' }}>
          <Input
            inputType="email"
            label="Email"
            isMaterial={true}
            icon={<Icon icon={arrow_right} />}
            iconPosition="right"
            onChange={value => {
              console.log('Input value: ', value);
            }}
          />
          <div style={{ marginBottom: '20px' }} />
          <Input
            inputType="password"
            label="Password"
            passwordShowHide={true}
            placeholder="Enter your password"
          />
          <div style={{ marginBottom: '20px' }} />
          <Input
            inputType="textarea"
            label="Your comment"
            iconPosition="right"
            isMaterial={true}
          />
        </div>
        <br />
        <h3> FormikTest Basic with FORMIK :</h3>
        <FormikTest />
        <br />
        <h3>DateRangePickerBox with AirBNB Component:</h3>
        <DateRangePickerBox
          startDateId="start_id"
          endDateId="end_id"
          showClearDates={true}
          startDatePlaceholderText="START"
          endDatePlaceholderText="END"
          // isRTL={true}
          block={true}
        />
        <br />
        <br />
        <h3>Single DatePicker with AirBNB Component:</h3>
        <h3>Tooltip Component:</h3>
        <p>
          Here is a{' '}
          <Tooltip
            message={'Hello, I am a super cool tooltip'}
            position={'top'}
            bubbleStyle={{
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)'
            }}
          >
            tooltip
          </Tooltip>{' '}
          on top.
        </p>
        <p>
          Here is a{' '}
          <Tooltip
            message={'Hello, I am a super cool tooltip'}
            position={'bottom'}
          >
            tooltip
          </Tooltip>{' '}
          on bottom.
        </p>
        <p>
          Here is a{' '}
          <Tooltip
            message={'Hello, I am a super cool tooltip'}
            position={'left'}
          >
            tooltip
          </Tooltip>{' '}
          on left.
        </p>
        <p>
          Here is a{' '}
          <Tooltip
            message={'Hello, I am a super cool tooltip'}
            position={'right'}
          >
            tooltip
          </Tooltip>{' '}
          on right.
        </p>
        <br />
        <br />
        <h3>Drawer Component:</h3>
        <Drawer
          open={state.drawerLeft}
          toggleHandler={drawerLeftHandler}
          drawerHandler={<Button title="Drawer" />}
        >
          <p>Drawer content</p>
        </Drawer>
        &nbsp;&nbsp;&nbsp;
        <Drawer
          open={state.drawerRight}
          toggleHandler={drawerRightHandler}
          placement="right"
          drawerHandler={
            <Button colors="secondaryWithBg" title="Drawer Right" />
          }
        >
          <p>Drawer content</p>
        </Drawer>
        <br />
        <br />
        <br />
        <h3>Alert Component:</h3>
        <div style={{ maxWidth: '700px' }}>
          <Alert>
            <Text content="Default Alert" />
          </Alert>
          &nbsp;&nbsp;&nbsp;
          <Alert colors="primary">
            <Text content="Primary Alert" />
          </Alert>
          &nbsp;&nbsp;&nbsp;
          <Alert colors="secondary">
            <Text content="Secondary Alert" />
          </Alert>
          &nbsp;&nbsp;&nbsp;
          <Alert colors="warning">
            <Text content="Warning Alert" />
          </Alert>
          &nbsp;&nbsp;&nbsp;
          <Alert colors="error">
            <Text content="Error Alert" />
          </Alert>
        </div>
        <br />
        <br />
        <br />
        <h3>DatePicker with AirBNB Component:</h3>
        <h4>DatePicker</h4>
        <DatePicker
          id="one"
          placeholder="date"
          disabled={false}
          showClearDate={true}
          isRTL={true}
          orientation="vertical"
          anchorDirection="left"
          withPortal={true}
          withFullScreenPortal={false}
        />
        <br />
        <br />
        <DatePicker
          id="two"
          disabled={false}
          showClearDate={true}
          orientation="horizontal"
          anchorDirection="left"
          withPortal={true}
          withFullScreenPortal={true}
        />
        <br />
        <br />
        <br />
        <h3>RangeBoxOld Component:</h3>
        <h4>Slide</h4>
        <RangeBoxOld
          type="slide"
          disabled={false}
          min={0}
          max={10}
          stepper={1}
          unit=" USD"
          slideDefaultValue={4}
          dots={false}
          vertical={false}
        />
        <br />
        <h4>Range</h4>
        <RangeBoxOld
          type="range"
          disabled={false}
          min={10}
          max={100}
          stepper={5}
          unit=" USD"
          placement="bottom"
          rangeDefaultValue={[20, 60]}
          dots={true}
          vertical={false}
        />
        <br />
        <br />
        <h3>Radio Component:</h3>
        <Radio id="1" value="MOMA" isChecked={true} labelText="Moma" />
        &nbsp;&nbsp;&nbsp;
        <Radio id="2" value="FIGHTER" isChecked={true} labelText="Fighter" />
        &nbsp;&nbsp;&nbsp;
        <Radio id="3" value="BUCKY" labelText="Bucky" />
        &nbsp;&nbsp;&nbsp;
        <Radio id="4" value="ARTHUS" disabled={true} labelText="Arthus" />
        <br />
        <br />
        <h3>Checkbox Component:</h3>
        <Checkbox id="1" value="MISSME" isChecked={true} labelText="Miss me" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Checkbox id="2" value="FIGHTER" isChecked={true} labelText="Fighter" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Checkbox id="3" value="MOMA" labelPosition="left" labelText="Moma" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Checkbox
          id="4"
          value="ARTHUS"
          labelPosition="left"
          disabled={true}
          labelText="Arthus"
        />
        {/* <h4>
          <CheckBoxGroup data={data} />
        </h4> */}
        <br />
        <br />
        <h3>Loader Component:</h3>
        <Loader width={20} height={20} loaderColor="#028489" />
        &nbsp;&nbsp;&nbsp;
        <Loader width={25} height={25} loaderColor="#ff5b60" />
        &nbsp;&nbsp;&nbsp;
        <Loader width={30} height={30} loaderColor="#fdb32a" />
        &nbsp;&nbsp;&nbsp;
        <Loader width={40} height={40} loaderColor="#F29E02" />
        <br />
        <br />
        <br />
        <h3>Button Component:</h3>
        <div style={{ display: 'flex' }}>
          <Button
            title="Default"
            type="button"
            onClick={() => {
              console.log('hello');
            }}
            isMaterial={true}
          />
          &nbsp;&nbsp;&nbsp;
          <Button
            title="outlined"
            type="button"
            onClick={() => {
              console.log('hello');
            }}
            colors="primary"
            variant="outlined"
            disabled={true}
          />
          &nbsp;&nbsp;&nbsp;
          <Button
            title="Loader"
            type="button"
            onClick={() => {
              console.log('hello');
            }}
            colors="primaryWithBg"
            icon={<Icon icon={arrow_right} />}
            isLoading={true}
            loader={<Loader loaderColor="white" />}
          />
          &nbsp;&nbsp;&nbsp;
          <Button
            type="button"
            onClick={() => {
              console.log('hello');
            }}
            colors="secondaryWithBg"
            variant="fab"
            icon={<Icon icon={arrow_right} />}
          />
          &nbsp;&nbsp;&nbsp;
          <Button
            title="Extended Fab"
            type="button"
            onClick={() => {
              console.log('hello');
            }}
            colors="warningWithBg"
            variant="extendedFab"
            icon={<Icon icon={arrow_right} />}
          />
        </div>
        <br />
        <br />
        <br />
        <h3>Switch Component:</h3>
        <div style={{ display: 'flex' }}>
          <Switch
            labelText="Label Top"
            isMaterial={true}
            switchSize="40px"
            barColor="#ababab"
            onChange={value => {
              console.log('Switch value: ', value);
            }}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Switch
            isChecked={true}
            labelText="Label Left"
            labelPosition="left"
            switchColor="#ff5b60"
            switchSize="46px"
            onChange={value => {
              console.log('Switch value: ', value);
            }}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Switch
            labelText="Label Bottom"
            onChange={value => {
              console.log('Switch value: ', value);
            }}
            labelPosition="bottom"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Switch
            isChecked={true}
            labelText="Label Right"
            labelPosition="right"
            switchColor="#fdb32a"
            onChange={value => {
              console.log('Switch value: ', value);
            }}
          />
        </div>
        <br />
        <br />
        <br />
        <h3>Select Component:</h3>
        <div style={{ width: '300px' }}>
          <Select options={optionsArray} labelText="Select" />
          &nbsp;&nbsp;&nbsp;
          <Select
            options={optionsArray}
            labelText="Multi Select"
            isMulti={true}
          />
        </div>
        <br />
        <br />
        <br />
        <div>
          <h3>Box, Text and Heading Component:</h3>
          <Box>
            <Text content="Hello World" />
            <Heading content="Hello Heading" />
          </Box>
          <br />
          <br />
          <h3>Flexbox, Text and Heading Component:</h3>
          <Box flexBox justifyContent="center">
            <Text content="Hello World" />
            <Heading as="h1" content="Hello Heading" />
          </Box>
          <br />
          <br />
          <br />
          <h3>Image</h3>
          <Image src={DemoImage} alt="Demo Image" />
          <br />
          <br />
          <br />
          <Link href={'https://redq.io'} children={'RedQ.io'} />
        </div>
        <br />
        <br />
        <br />
        <h3>Card</h3>
        <Card>
          <Image src={DemoImage} alt="Demo Image" />
        </Card>
        <br />
        <br />
        <br />
        <h3>ListGrid</h3>
        <ListGrid
          data={[1, 2, 3, 4]}
          columnWidth={1 / 4} //{[1, 1/2, 1/4]} responsive
          component={() => (
            <Card>
              <Image src={DemoImage} alt="Demo Image" p={3} />
            </Card>
          )}
        />
        <br />
        <br />
        <br />
        <Logo as="a" href="#" title="Logo" />
        <Logo href="#" logoSrc={DemoImage} title="Logo" />
      </div>
    </ThemeProvider>
  );
};

export default App;
