import { View } from 'react-native';

import {
  TableView,
  Cell,
  CellIcon,
  CellText,
  Divider,
  Touchable,
  styled,
  PaddedView,
  H4,
} from '@apollosproject/ui-kit';
import { RockAuthedWebBrowser } from '@apollosproject/ui-connected';

const RowHeader = styled(({ theme }) => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: theme.sizing.baseUnit,
}))(PaddedView);

const Name = styled({
  flexGrow: 1,
})(View);

const ActionTable = () => (
  <RockAuthedWebBrowser>
    {(openUrl) => (
      <View>
        {/* Connect */}
        <RowHeader>
          <Name>
            <H4>{'Connect with Crossings'}</H4>
          </Name>
        </RowHeader>
        <TableView>
          <Touchable
            onPress={() => openUrl('https://app.crossings.church/contact-us')}
          >
            <Cell>
              <CellText>Contact Us</CellText>
              <CellIcon name="arrow-next" />
            </Cell>
          </Touchable>
          <Divider />

          <Touchable
            onPress={() => openUrl('https://app.crossings.church/locations')}
          >
            <Cell>
              <CellText>Locations & Times</CellText>
              <CellIcon name="arrow-next" />
            </Cell>
          </Touchable>
          <Divider />
        </TableView>
      </View>
    )}
  </RockAuthedWebBrowser>
);

const StyledActionTable = styled(({ theme }) => ({
  paddingBottom: theme.sizing.baseUnit * 100,
}))(ActionTable);

export default StyledActionTable;
