import React from 'react';
import { Tabs, Dropdown, Spin, Badge, theme } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import NoticeList, { NoticeIconTabProps } from './NoticeList';
import { useControllableValue } from 'ahooks';
// import classNames from 'classnames';
import styles from './index.module.css';
import HeaderButton from '../HeaderButton';
const { TabPane } = Tabs;

export type NoticeIconProps = {
  count?: number;
  bell?: React.ReactNode;
  className?: string;
  loading?: boolean;
  onClear?: (tabName: string, tabKey: string) => void;
  onItemClick?: (
    item: API.NoticeIconItem,
    tabProps: NoticeIconTabProps
  ) => void;
  onViewMore?: (tabProps: NoticeIconTabProps, e: MouseEvent) => void;
  onTabChange?: (tabTile: string) => void;
  style?: React.CSSProperties;
  onPopupVisibleChange?: (visible: boolean) => void;
  popupVisible?: boolean;
  clearText?: string;
  viewMoreText?: string;
  clearClose?: boolean;
  emptyImage?: string;
  children?: React.ReactElement<NoticeIconTabProps>[];
};

const NoticeIcon: React.FC<NoticeIconProps> & {
  Tab: typeof NoticeList;
} = (props) => {
  const { token } = theme.useToken();
  const getNotificationBox = (): React.ReactNode => {
    const {
      children,
      loading,
      onClear,
      onTabChange,
      onItemClick,
      onViewMore,
      clearText,
      viewMoreText
    } = props;
    if (!children) {
      return null;
    }
    const panes: React.ReactNode[] = [];
    React.Children.forEach(
      children,
      (child: React.ReactElement<NoticeIconTabProps>): void => {
        if (!child) {
          return;
        }
        const { list, title, count, tabKey, showClear, showViewMore } =
          child.props;
        const len = list?.length ? list.length : 0;
        const msgCount = count || count === 0 ? count : len;
        const tabTitle: string =
          msgCount > 0 ? `${title} (${msgCount})` : title;
        panes.push(
          <TabPane tab={tabTitle} key={tabKey}>
            <NoticeList
              clearText={clearText}
              viewMoreText={viewMoreText}
              list={list}
              tabKey={tabKey}
              onClear={(): void => onClear?.(title, tabKey)}
              onClick={(item): void => onItemClick?.(item, child.props)}
              onViewMore={(event): void => onViewMore?.(child.props, event)}
              showClear={showClear}
              showViewMore={showViewMore}
              title={title}
            />
          </TabPane>
        );
      }
    );
    return (
      <Spin spinning={loading} delay={300}>
        <Tabs
          centered
          style={{
            borderRadius: token.borderRadius,
            backgroundColor: token.colorBgElevated,
            boxShadow: token.boxShadowSecondary
          }}
          className={styles.tabs}
          onChange={onTabChange}
        >
          {panes}
        </Tabs>
      </Spin>
    );
  };

  const { className, count, bell } = props;

  const [visible, setVisible] = useControllableValue<boolean>({
    value: props.popupVisible,
    onChange: props.onPopupVisibleChange
  });
  // const noticeButtonClass = classNames(className, styles.noticeButton);
  const notificationBox = getNotificationBox();
  const NoticeBellIcon = bell || <BellOutlined />;
  const trigger = (
    // <span className={classNames(noticeButtonClass, { opened: visible })}>
    //   <Badge
    //     count={count}
    //     style={{ boxShadow: 'none' }}
    //     className={styles.badge}
    //   >
    //     {NoticeBellIcon}
    //   </Badge>
    // </span>
    <HeaderButton
      icon={
        <Badge
          size="small"
          count={15}
          style={{ boxShadow: 'none', fontSize: 12, lineHeight: 1 }}
        >
          {NoticeBellIcon}
        </Badge>
      }
    />
  );
  if (!notificationBox) {
    return trigger;
  }

  return (
    <Dropdown
      placement="bottomRight"
      overlay={notificationBox as React.ReactElement}
      overlayClassName={styles.popover}
      trigger={['click']}
      visible={visible}
      onVisibleChange={setVisible}
    >
      {trigger}
    </Dropdown>
  );
};

NoticeIcon.defaultProps = {
  emptyImage:
    'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg'
};

NoticeIcon.Tab = NoticeList;

export default NoticeIcon;
