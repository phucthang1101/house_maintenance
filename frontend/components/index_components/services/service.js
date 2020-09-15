import React from 'react';
import './service.css';

const Service = () => {
  return (
    <React.Fragment>
      <div className='container-fluid service-container'>
        <h1 className='service-title'>Services</h1>
        <h3 className='service-subtitle'>House Repairing & Maintenance</h3>
        <div className='row mx-0 service-collection'>
          <div className='col-12 col-md-4 service-item'>
            <a className='service-item__link' href='#'>
              <div className='service-item__section'>
                <div className='service-item__header'>
                  <div className='service-item__icon service-icon__bg fontello-icon-tools'></div>
                  <h5 className='service-item__name'>Maintenance</h5>
                </div>
              </div>
              <div className='service-item__section'>
                <div className='service-item__body '>
                  <div className='service-item__content'>
                    <p>
                      Garage Door Repair. Carpentry. Termite Damage <br />
                      Repairs. Tub and shower caulking. Doors. <br />
                      Fences. Weatherproofing…
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className='col-12 col-md-4 service-item'>
            <a className='service-item__link' href='#'>
              <div className='service-item__section'>
                <div className='service-item__header'>
                  <div className='service-item__icon service-icon__bg fontello-icon-wired'></div>
                  <h5 className='service-item__name'>Wiring</h5>
                </div>
              </div>
              <div className='service-item__section'>
                <div className='service-item__body '>
                  <div className='service-item__content'>
                    <p>
                      Electrical. Cable TV. Internet. Network. Low
                      <br />
                      Voltage. Door Bells. Home Theater. Sprinkler
                      <br />
                      Systems. Phone Jacks. Computers.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className='col-12 col-md-4 service-item'>
            <a className='service-item__link' href='#'>
              <div className='service-item__section'>
                <div className='service-item__header'>
                  <div className='service-item__icon service-icon__bg fontello-icon-construction3'></div>
                  <h5 className='service-item__name'>Tiling</h5>
                </div>
              </div>
              <div className='service-item__section'>
                <div className='service-item__body '>
                  <div className='service-item__content'>
                    <p>
                      Kitchens. Baths. Back Splashes. Floors. <br />
                      Grout. Grout Repair. Grout sealing.
                      <br />
                      Tile repair. Showers. Walls
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className='row mx-0 service-collection'>
          <div className='col-12 col-md-4 service-item'>
            <a className='service-item__link' href='#'>
              <div className='service-item__section'>
                <div className='service-item__header'>
                  <div className='service-item__icon service-icon__bg fontello-icon-widescreen'></div>
                  <h5 className='service-item__name'>Audio/Visual</h5>
                </div>
              </div>
              <div className='service-item__section'>
                <div className='service-item__body '>
                  <div className='service-item__content'>
                    <p>
                    Home Theater Installation. Flat Panel TV <br />
                    Installation. Projectors. Sound Systems. <br />
                    Surround Sound.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className='col-12 col-md-4 service-item'>
            <a className='service-item__link' href='#'>
              <div className='service-item__section'>
                <div className='service-item__header'>
                  <div className='service-item__icon service-icon__bg fontello-icon-electric38'></div>
                  <h5 className='service-item__name'>Electrical</h5>
                </div>
              </div>
              <div className='service-item__section'>
                <div className='service-item__body '>
                  <div className='service-item__content'>
                    <p>
                    Switches. Dimmers. Outlets. Recessed <br />
                    Lighting. Light Fixture Installation. Ceiling<br />
                    Fans. Ground Fault Outlet Installation.
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className='col-12 col-md-4 service-item'>
            <a className='service-item__link' href='#'>
              <div className='service-item__section'>
                <div className='service-item__header'>
                  <div className='service-item__icon service-icon__bg fontello-icon-faucet1'></div>
                  <h5 className='service-item__name'>Plumbing</h5>
                </div>
              </div>
              <div className='service-item__section'>
                <div className='service-item__body '>
                  <div className='service-item__content'>
                    <p>
                    Leaks Repaired. Faucet Installation. Toilet <br />
                    Repair/Replacement. Faucet Leaks. Shut Off<br />
                    Valves. Kitchens. Toilet Repairs…
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Service;
