/*
 * @Description: 
 * @Author: zhangshuo
 * @Date: 2021-10-16 14:35:50
 * @LastEditors: zhangshuo
 */
package com.whatnews;

import android.os.Bundle;
import com.facebook.react.ReactActivity;


public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "whatnews";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
}
