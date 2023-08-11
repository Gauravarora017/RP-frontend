import React from 'react';
import './subscribe.css';
import { useEffect, useState } from 'react';

function NetflixPlanSelector() {

    useEffect(() => {
        const toggleContents = document.querySelectorAll('.toggle-content');
        toggleContents[0].style.display = 'block'; // Show the first content by default
    
        const toggleInput = document.querySelector('.toggle input');
    
        const handleToggleChange = () => {
          toggleContents.forEach(content => {
            content.style.display = 'none';
          });
    
          const selectedContentIndex = toggleInput.checked ? 1 : 0;
          toggleContents[selectedContentIndex].style.display = 'block';
        };
    
        if (toggleInput) {
          toggleInput.addEventListener('change', handleToggleChange);
        }
    
        return () => {
          if (toggleInput) {
            toggleInput.removeEventListener('change', handleToggleChange);
          }
        };
      }, []);

    return (
        <>
        <div className="centerContainer narrowCenterContainer snipcss-RGWYd style-3ErCG" id="style-3ErCG">
            <div className="planGrid planGrid--has4Plans" data-uia="plan-grid">
                <div className="planGrid__header snipcss0-0-0-1 tether-target-attached-top tether-element-attached-top tether-element-attached-center tether-target-attached-center">
                    <div className="intro-text">
                        <h1>Choose the right plan for you</h1>
                    </div>
                    <div className="cen">
                        <label className="toggle">
                            <input type="checkbox" />
                            <span className="toggle-text">
                                <span className="toggle-option1">Monthly</span>
                                <span className="toggle-option2">Yearly</span>
                            </span>
                        </label>
                    </div>
                {/* </div> */}

                <div className="planGrid__selector planGrid__planSelector snipcss0-1-1-2">
                    <span><label className="planGrid__selectorChoice planGrid__planChoice snipcss0-2-2-4">
                        <input type="radio" name="planChoice" className="planGrid__selectorInput planGrid__planInput snipcss0-3-4-5" id="planGrid_planChoice_0" data-uia="plan-grid-plan-selector+input-text_1_stream_name" value="114120" />
                        <span className="planGrid__selectorLabel planGrid__planLabel snipcss0-3-4-6">Mobile</span>
                    </label></span>
                    <span>
                    <label className="planGrid__selectorChoice planGrid__planChoice snipcss0-2-2-7" htmlFor="planGrid_planChoice_1" data-uia="plan-grid-plan-selector+label-text_1_stream_name">
                        <input type="radio" name="planChoice" className="planGrid__selectorInput planGrid__planInput snipcss0-3-7-8" id="planGrid_planChoice_1" data-uia="plan-grid-plan-selector+input-text_1_stream_name" value="314001031" checked />
                        <span className="planGrid__selectorLabel planGrid__planLabel snipcss0-3-7-9">Basic</span>
                    </label></span>
                    <span><label className="planGrid__selectorChoice planGrid__planChoice snipcss0-2-2-10" htmlFor="planGrid_planChoice_2" data-uia="plan-grid-plan-selector+label-text_2_stream_name">
                        <input type="radio" name="planChoice" className="planGrid__selectorInput planGrid__planInput snipcss0-3-10-11" id="planGrid_planChoice_2" data-uia="plan-grid-plan-selector+input-text_2_stream_name" value="10322" />
                        <span className="planGrid__selectorLabel planGrid__planLabel snipcss0-3-10-12">Standard</span>
                    </label></span>
                    <span><label className="planGrid__selectorChoice planGrid__planChoice snipcss0-2-2-13" htmlFor="planGrid_planChoice_3" data-uia="plan-grid-plan-selector+label-text_4_stream_name">
                        <input type="radio" name="planChoice" className="planGrid__selectorInput planGrid__planInput snipcss0-3-13-14" id="planGrid_planChoice_3" data-uia="plan-grid-plan-selector+input-text_4_stream_name" value="10341" />
                        <span className="planGrid__selectorLabel planGrid__planLabel snipcss0-3-13-15">Premium</span>
                    </label></span>
                </div>
            </div>
        {/* </div> */}

<div class="toggle-content">
<table
class="planGrid__featureTable"
role="table"
data-uia="plan-grid-feature-table"
>
<tbody
  class="planGrid__featureTableBody"
  data-uia="plan-grid-feature-table-body"
>

  <tr
    role="row"
    class="planGrid__featureTableRow planGrid__featureTableRow--planPrice"
  >

    <td
      class="planGrid__cell planGrid__featureCell tether-target-attached-top tether-abutted tether-abutted-top tether-element-attached-top tether-element-attached-center tether-target-attached-center"
      role="cell"
      data-uia="plan-grid-feature-table-cell+planPrice-feature"
    >
      Monthly price
    </td>
    <td
      class="planGrid__cell planGrid__stringCell"
      role="cell"
      data-uia="plan-grid-feature-table-cell+planPrice-text_1_stream_name"
      aria-label="Mobile"
    >
      ₹&nbsp;149
    </td>
    <td
      class="planGrid__cell planGrid__stringCell"
      role="cell"
      data-uia="plan-grid-feature-table-cell+planPrice-text_1_stream_name"
      aria-label="Basic"
    >
      ₹&nbsp;199
    </td>
    <td
      class="planGrid__cell planGrid__stringCell"
      role="cell"
      data-uia="plan-grid-feature-table-cell+planPrice-text_2_stream_name"
      aria-label="Standard"
    >
      ₹&nbsp;499
    </td>
    <td
      class="planGrid__cell planGrid__cell--isSelected planGrid__stringCell"
      role="cell"
      data-uia="plan-grid-feature-table-cell+planPrice-text_4_stream_name"
      aria-label="Premium"
    >
      ₹&nbsp;649
    </td>
  </tr>
  <tr
    role="row"
    class="planGrid__featureTableRow planGrid__featureTableRow--videoQuality"
  >
    <td
      class="planGrid__cell planGrid__featureCell"
      role="cell"
      data-uia="plan-grid-feature-table-cell+videoQuality-feature"
    >
      Video quality
    </td>
    <td
      class="planGrid__cell planGrid__videoQualityCell"
      role="cell"
      data-uia="plan-grid-feature-table-cell+videoQuality-text_1_stream_name"
      aria-label="Mobile"
    >
      <div class="planGrid__videoQualityLabel">Good</div>
    </td>
    
                <td className="planGrid__cell planGrid__videoQualityCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+videoQuality-text_1_stream_name" aria-label="Mobile">
                    <div className="planGrid__videoQualityLabel">Good</div>
                </td>
                <td className="planGrid__cell planGrid__videoQualityCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+videoQuality-text_2_stream_name" aria-label="Standard">
                    <div className="planGrid__videoQualityLabel">Better</div>
                </td>
                <td className="planGrid__cell planGrid__cell--isSelected planGrid__videoQualityCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+videoQuality-text_4_stream_name" aria-label="Premium">
                    <div className="planGrid__videoQualityLabel">Best</div>
                </td>
            </tr>
            <tr role="row" className="planGrid__featureTableRow planGrid__featureTableRow--resolution">
                <td className="planGrid__cell planGrid__featureCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+resolution-feature">
                    Resolution
                </td>
                <td className="planGrid__cell planGrid__videoQualityCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+resolution-text_1_stream_name" aria-label="Mobile">
                    <div className="planGrid__videoQualityLabel">480p</div>
                </td>
                <td className="planGrid__cell planGrid__videoQualityCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+resolution-text_1_stream_name" aria-label="Basic">
                    <div className="planGrid__videoQualityLabel">720p</div>
                </td>
                <td className="planGrid__cell planGrid__videoQualityCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+resolution-text_2_stream_name" aria-label="Standard">
                    <div className="planGrid__videoQualityLabel">1080p</div>
                </td>
                <td className="planGrid__cell planGrid__cell--isSelected planGrid__videoQualityCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+resolution-text_4_stream_name" aria-label="Premium">
                    <div className="planGrid__videoQualityLabel">4K+HDR</div>
                </td>
            </tr>
            <tr role="row" className="planGrid__featureTableRow planGrid__featureTableRow--supportedDevices">
                <td className="planGrid__cell planGrid__featureCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+supportedDevices-feature">
                    Devices you can use to watch
                </td>
                <td className="planGrid__cell planGrid__supportedDevicesCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+supportedDevices-text_1_stream_name" aria-label="Mobile">
                    <div className="planGrid__supportedDevicesLabel">Phone</div>
                    <div className="planGrid__supportedDevicesLabel">Tablet</div>
                </td>
                <td className="planGrid__cell planGrid__supportedDevicesCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+supportedDevices-text_1_stream_name" aria-label="Basic">
                    <div className="planGrid__supportedDevicesLabel">Phone</div>
                    <div className="planGrid__supportedDevicesLabel">Tablet</div>
                    <div className="planGrid__supportedDevicesLabel">Computer</div>
                    <div className="planGrid__supportedDevicesLabel">TV</div>
                </td>
                <td className="planGrid__cell planGrid__supportedDevicesCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+supportedDevices-text_2_stream_name" aria-label="Standard">
                    <div className="planGrid__supportedDevicesLabel">Phone</div>
                    <div className="planGrid__supportedDevicesLabel">Tablet</div>
                    <div className="planGrid__supportedDevicesLabel">Computer</div>
                    <div className="planGrid__supportedDevicesLabel">TV</div>
                </td>
                <td className="planGrid__cell planGrid__cell--isSelected planGrid__supportedDevicesCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+supportedDevices-text_4_stream_name" aria-label="Premium">
                    <div className="planGrid__supportedDevicesLabel">Phone</div>
                    <div className="planGrid__supportedDevicesLabel">Tablet</div>
                    <div className="planGrid__supportedDevicesLabel">Computer</div>
                    <div className="planGrid__supportedDevicesLabel">TV</div>
                </td>
            </tr>
            </tbody>
      </table>
      </div>

<div className="toggle-content">
<table className="planGrid__featureTable" role="table" data-uia="plan-grid-feature-table">
    <tbody className="planGrid__featureTableBody" data-uia="plan-grid-feature-table-body">
        <tr role="row" className="planGrid__featureTableRow planGrid__featureTableRow--planPrice">
            <td className="planGrid__cell planGrid__featureCell tether-target-attached-top tether-abutted tether-abutted-top tether-element-attached-top tether-element-attached-center tether-target-attached-center"
                role="cell" data-uia="plan-grid-feature-table-cell+planPrice-feature">
                Yearly price
            </td>
            <td className="planGrid__cell planGrid__stringCell"
                role="cell" data-uia="plan-grid-feature-table-cell+planPrice-text_1_stream_name"
                aria-label="Mobile">
                ₹&nbsp;1499
            </td>
            <td className="planGrid__cell planGrid__stringCell"
                role="cell" data-uia="plan-grid-feature-table-cell+planPrice-text_1_stream_name"
                aria-label="Basic">
                ₹&nbsp;1999
            </td>
            <td className="planGrid__cell planGrid__stringCell"
                role="cell" data-uia="plan-grid-feature-table-cell+planPrice-text_2_stream_name"
                aria-label="Standard">
                ₹&nbsp;4999
            </td>
            <td className="planGrid__cell planGrid__cell--isSelected planGrid__stringCell"
                role="cell" data-uia="plan-grid-feature-table-cell+planPrice-text_4_stream_name"
                aria-label="Premium">
                ₹&nbsp;6499
            </td>
        </tr>
        <tr role="row" className="planGrid__featureTableRow planGrid__featureTableRow--videoQuality">
                <td className="planGrid__cell planGrid__featureCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+videoQuality-feature">
                    Video quality
                </td>
                <td className="planGrid__cell planGrid__videoQualityCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+videoQuality-text_1_stream_name" aria-label="Mobile">
                    <div className="planGrid__videoQualityLabel">Good</div>
                </td>
                <td className="planGrid__cell planGrid__videoQualityCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+videoQuality-text_1_stream_name" aria-label="Basic">
                    <div className="planGrid__videoQualityLabel">Good</div>
                </td>
                <td className="planGrid__cell planGrid__videoQualityCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+videoQuality-text_2_stream_name" aria-label="Standard">
                    <div className="planGrid__videoQualityLabel">Better</div>
                </td>
                <td className="planGrid__cell planGrid__cell--isSelected planGrid__videoQualityCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+videoQuality-text_4_stream_name" aria-label="Premium">
                    <div className="planGrid__videoQualityLabel">Best</div>
                </td>
            </tr>
            <tr role="row" className="planGrid__featureTableRow planGrid__featureTableRow--resolution">
                <td className="planGrid__cell planGrid__featureCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+resolution-feature">
                    Resolution
                </td>
                <td className="planGrid__cell planGrid__videoQualityCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+resolution-text_1_stream_name" aria-label="Mobile">
                    <div className="planGrid__videoQualityLabel">480p</div>
                </td>
                <td className="planGrid__cell planGrid__videoQualityCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+resolution-text_1_stream_name" aria-label="Basic">
                    <div className="planGrid__videoQualityLabel">720p</div>
                </td>
                <td className="planGrid__cell planGrid__videoQualityCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+resolution-text_2_stream_name" aria-label="Standard">
                    <div className="planGrid__videoQualityLabel">1080p</div>
                </td>
                <td className="planGrid__cell planGrid__cell--isSelected planGrid__videoQualityCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+resolution-text_4_stream_name" aria-label="Premium">
                    <div className="planGrid__videoQualityLabel">4K+HDR</div>
                </td>
            </tr>
            <tr role="row" className="planGrid__featureTableRow planGrid__featureTableRow--supportedDevices">
                <td className="planGrid__cell planGrid__featureCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+supportedDevices-feature">
                    Devices you can use to watch
                </td>
                <td className="planGrid__cell planGrid__supportedDevicesCell" role="cell"
                    data-uia="plan-grid-feature-table-cell+supportedDevices-text_1_stream_name" aria-label="Mobile">
                    <div className="planGrid__supportedDevicesLabel">Phone</div>
                    <div className="planGrid__supportedDevicesLabel">Tablet</div>
                </td>
                <td className="planGrid__cell planGrid__supportedDevicesCell" role="cell"
                                        data-uia="plan-grid-feature-table-cell+supportedDevices-text_1_stream_name" aria-label="Basic">
                                        <div className="planGrid__supportedDevicesLabel">Phone</div>
                                        <div className="planGrid__supportedDevicesLabel">Tablet</div>
                                        <div className="planGrid__supportedDevicesLabel">Computer</div>
                                        <div className="planGrid__supportedDevicesLabel">TV</div>
                                    </td>
                                    <td className="planGrid__cell planGrid__supportedDevicesCell" role="cell"
                                        data-uia="plan-grid-feature-table-cell+supportedDevices-text_2_stream_name" aria-label="Standard">
                                        <div className="planGrid__supportedDevicesLabel">Phone</div>
                                        <div className="planGrid__supportedDevicesLabel">Tablet</div>
                                        <div className="planGrid__supportedDevicesLabel">Computer</div>
                                        <div className="planGrid__supportedDevicesLabel">TV</div>
                                    </td>
                                    <td className="planGrid__cell planGrid__cell--isSelected planGrid__supportedDevicesCell" role="cell"
                                        data-uia="plan-grid-feature-table-cell+supportedDevices-text_4_stream_name" aria-label="Premium">
                                        <div className="planGrid__supportedDevicesLabel">Phone</div>
                                        <div className="planGrid__supportedDevicesLabel">Tablet</div>
                                        <div className="planGrid__supportedDevicesLabel">Computer</div>
                                        <div className="planGrid__supportedDevicesLabel">TV</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <small className="planGrid__disclaimer planGrid__standardDisclaimer">
                            <br />
                        </small>
                    </div>
                    </div>

            <div className="submitBtnContainer">
                <button
                    type="button"
                    tabIndex="0"
                    className="nf-btn nf-btn-primary nf-btn-solid nf-btn-oversize"
                    data-uia="cta-plan-selection"
                    placeholder="planSelection_button_continue"
                >
                    Next
                </button>
            </div>
            </div>
            </>


        
    );
}

export default NetflixPlanSelector;
