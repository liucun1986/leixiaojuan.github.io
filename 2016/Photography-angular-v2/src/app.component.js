/**
 * Created by v_lianwang on 2016/5/1.
 */

let appComponent = () => {
  return {
    template: `
      <Navbar></Navbar>
      <div ui-view></div>
      <foot></foot>
    `,
    restrict: 'E'
  };
};

export default appComponent;
