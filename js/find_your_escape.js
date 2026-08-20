/* ==========================================================
   FIND YOUR NEXT ESCAPE — KERALA RECOMMENDATION SYSTEM
========================================================== */

(function () {

    "use strict";


    function initFindEscape() {

        const planner =
            document.querySelector("#tripPlanner");

        if (!planner) {
            return;
        }


        /* ======================================================
           ELEMENTS
        ====================================================== */

        const travellerChoices =
            planner.querySelectorAll(
                '.findEscapeChoice[data-group="traveller"]'
            );

        const experienceChoices =
            planner.querySelectorAll(
                '.findEscapeChoice[data-group="experience"]'
            );

        const durationChoices =
            planner.querySelectorAll(
                ".findEscapeDuration"
            );

        const locationChoices =
            planner.querySelectorAll(
                ".findEscapeLocation"
            );

        const findButton =
            planner.querySelector(
                "#findEscapeButton"
            );

        const result =
            planner.querySelector(
                ".findEscapeResult"
            );

        const resultTitle =
            planner.querySelector(
                ".findEscapeResultTitle"
            );

        const resultTags =
            planner.querySelector(
                ".findEscapeResultTags"
            );

        const resultDetails =
            planner.querySelector(
                ".findEscapeDetails"
            );

        const resultImage =
            planner.querySelector(
                ".findEscapeResultImage img"
            );

        const resultCard =
            planner.querySelector(
                ".findEscapeResultCard"
            );


        /* ======================================================
           CUSTOMIZE TRIP ELEMENTS
        ====================================================== */

        const customizeButton =
            planner.querySelector(
                ".findEscapeCustomize"
            );

        const customizeSection =
            document.querySelector(
                "#customizeTrip"
            );

        const customizeTitle =
            document.querySelector(
                "#customizeTripTitle"
            );

        const customizeDestinations =
            document.querySelector(
                "#customizeTripDestinations"
            );

        const customizeDuration =
            document.querySelector(
                "#customizeTripDuration"
            );

        const customizeTraveller =
            document.querySelector(
                "#customizeTripTraveller"
            );

        const customizeExperiences =
            document.querySelector(
                "#customizeTripExperiences"
            );

        const customizeContinue =
            document.querySelector(
                "#customizeTripContinue"
            );

        const customizeVehicle =
            document.querySelector(
                "#customizeVehicle"
            );

        const customizePickup =
            document.querySelector(
                "#customizePickup"
            );

        const customizeRequest =
            document.querySelector(
                "#customizeRequest"
            );


        /* ======================================================
           REQUIRED ELEMENT CHECK
        ====================================================== */

        if (
            !findButton ||
            !result ||
            !resultTitle ||
            !resultTags ||
            !resultDetails
        ) {
            return;
        }


        /* ======================================================
           INITIAL STATE
           
           Recommendation:
           HIDDEN until FIND MY ESCAPE.

           Customize:
           HIDDEN until CUSTOMIZE THIS TRIP.
        ====================================================== */

        result.hidden = true;

        result.setAttribute(
            "aria-hidden",
            "true"
        );


        if (customizeSection) {

            customizeSection.hidden = true;

            customizeSection.setAttribute(
                "aria-hidden",
                "true"
            );

        }


        /* ======================================================
           USER STATE
        ====================================================== */

        const state = {

            traveller:
                getSelectedValue(
                    travellerChoices
                ),

            duration:
                getSelectedValue(
                    durationChoices
                ),

            experiences:
                getSelectedValues(
                    experienceChoices
                ),

            locations:
                getSelectedValues(
                    locationChoices
                )

        };


        /* ======================================================
           TRAVELLER DATA
        ====================================================== */

        const travellerData = {

            couple: {
                label: "Couple",
                bestFor: "Couple Escape"
            },

            family: {
                label: "Family",
                bestFor: "Family Escape"
            },

            friends: {
                label: "Friends",
                bestFor: "Friends Adventure"
            },

            solo: {
                label: "Solo",
                bestFor: "Solo Journey"
            },

            group: {
                label: "Group",
                bestFor: "Group Journey"
            },

            student: {
                label: "Student",
                bestFor: "Student Getaway"
            }

        };


        /* ======================================================
           DURATION DATA
        ====================================================== */

        const durationData = {

            "1-day": {
                label: "1 Day",
                nights: "Day Trip"
            },

            "2-days": {
                label: "2 Days",
                nights: "1 Night"
            },

            "3-days": {
                label: "3 Days",
                nights: "2 Nights"
            },

            "4-5-days": {
                label: "4–5 Days",
                nights: "3–4 Nights"
            },

            "6-7-days": {
                label: "6–7 Days",
                nights: "5–6 Nights"
            },

            "8-9-days": {
                label: "8–9 Days",
                nights: "7–8 Nights"
            },

            "10-plus-days": {
                label: "10+ Days",
                nights: "Extended Escape"
            }

        };


        /* ======================================================
           EXPERIENCE DATA
        ====================================================== */

        const experienceData = {

            nature: {
                label: "Nature"
            },

            tea: {
                label: "Tea"
            },

            adventure: {
                label: "Adventure"
            },

            waterfalls: {
                label: "Waterfalls"
            },

            sunrise: {
                label: "Sunrise"
            },

            "jeep-safari": {
                label: "Jeep Safari"
            },

            relaxation: {
                label: "Relaxation"
            },

            beach: {
                label: "Beach"
            },

            backwater: {
                label: "Backwater Boating"
            },

            wildlife: {
                label: "Wildlife"
            }

        };


        /* ======================================================
           LOCATION DATA
        ====================================================== */

        const locationData = {

            munnar: {
                name: "Munnar",
                type: "Hill Escape",
                highlights:
                    "Tea gardens, waterfalls, viewpoints and scenic mountain roads."
            },

            thekkady: {
                name: "Thekkady",
                type: "Wildlife Escape",
                highlights:
                    "Wildlife, forests, spice gardens and lake experiences."
            },

            vagamon: {
                name: "Vagamon",
                type: "Mountain Escape",
                highlights:
                    "Rolling meadows, pine forests and mountain adventures."
            },

            wayanad: {
                name: "Wayanad",
                type: "Nature Escape",
                highlights:
                    "Forests, waterfalls, viewpoints and wildlife experiences."
            },

            athirappilly: {
                name: "Athirappilly",
                type: "Waterfall Escape",
                highlights:
                    "Waterfalls, forest landscapes and scenic nature routes."
            },

            cherai: {
                name: "Cherai Beach",
                type: "Beach Escape",
                highlights:
                    "Beach time, coastal drives, sunsets and relaxed seaside experiences."
            },

            kochi: {
                name: "Kochi",
                type: "City & Coast Escape",
                highlights:
                    "Heritage streets, waterfronts, local culture and coastal experiences."
            },

            alappuzha: {
                name: "Alappuzha",
                type: "Backwater Escape",
                highlights:
                    "Backwater boating, canals, beaches and peaceful waterfront experiences."
            },

            ashtamudi: {
                name: "Ashtamudi",
                type: "Backwater Escape",
                highlights:
                    "Lake views, backwater boating and quiet coastal landscapes."
            },

            varkala: {
                name: "Varkala",
                type: "Beach Escape",
                highlights:
                    "Cliffside views, beaches, sunsets and relaxed coastal experiences."
            },

            kovalam: {
                name: "Kovalam",
                type: "Beach Escape",
                highlights:
                    "Beaches, lighthouse views, sunsets and coastal relaxation."
            },

            poovar: {
                name: "Poovar",
                type: "Lagoon Escape",
                highlights:
                    "Lagoon boating, waterways, golden beach and peaceful stays."
            },

            kanyakumari: {
                name: "Kanyakumari",
                type: "Coastal Escape",
                highlights:
                    "Coastal viewpoints, sunrise experiences and southern landscapes."
            },

            kodaikanal: {
                name: "Kodaikanal",
                type: "Hill Escape",
                highlights:
                    "Mountain roads, forests, lake views and cool hill-country experiences."
            },

            ooty: {
                name: "Ooty",
                type: "Hill Escape",
                highlights:
                    "Tea estates, mountain scenery, gardens and scenic hill roads."
            }

        };


        /* ======================================================
           TRAVELLER SELECTION
        ====================================================== */

        travellerChoices.forEach(
            (choice) => {

                choice.addEventListener(
                    "click",
                    () => {

                        state.traveller =
                            choice.dataset.value;


                        setSingleSelection(
                            travellerChoices,
                            choice
                        );

                    }
                );

            }
        );


        /* ======================================================
           DURATION SELECTION
        ====================================================== */

        durationChoices.forEach(
            (choice) => {

                choice.addEventListener(
                    "click",
                    () => {

                        state.duration =
                            choice.dataset.value;


                        setSingleSelection(
                            durationChoices,
                            choice
                        );

                    }
                );

            }
        );


        /* ======================================================
           EXPERIENCE — MULTIPLE
        ====================================================== */

        experienceChoices.forEach(
            (choice) => {

                choice.addEventListener(
                    "click",
                    () => {

                        toggleMultipleSelection(
                            choice,
                            state.experiences
                        );

                    }
                );

            }
        );


        /* ======================================================
           LOCATION — MULTIPLE
        ====================================================== */

        locationChoices.forEach(
            (choice) => {

                choice.addEventListener(
                    "click",
                    () => {

                        toggleMultipleSelection(
                            choice,
                            state.locations
                        );

                    }
                );

            }
        );


        /* ======================================================
           FIND MY ESCAPE
        ====================================================== */

        findButton.addEventListener(
            "click",
            () => {

                if (
                    !validateSelections()
                ) {
                    return;
                }


                /*
                 * Always keep Customize section hidden
                 * when a NEW recommendation is generated.
                 *
                 * User must click Customize This Trip.
                 */

                if (customizeSection) {

                    customizeSection.hidden = true;

                    customizeSection.setAttribute(
                        "aria-hidden",
                        "true"
                    );

                }


                buildRecommendation();


                /*
                 * Mobile:
                 * bring recommendation into view.
                 */

                if (
                    window.innerWidth <= 768
                ) {

                    setTimeout(
                        () => {

                            result.scrollIntoView({
                                behavior:
                                    "smooth",

                                block:
                                    "start"
                            });

                        },
                        150
                    );

                }

            }
        );


        /* ======================================================
           CUSTOMIZE THIS TRIP
           
           IMPORTANT:
           This is the ONLY place where the
           Customize section becomes visible.
        ====================================================== */

        if (customizeButton) {

            customizeButton.addEventListener(
                "click",
                () => {

                    if (
                        !state.traveller ||
                        !state.duration ||
                        !state.experiences.length ||
                        !state.locations.length
                    ) {
                        return;
                    }


                    /*
                     * Fill selected trip data first.
                     */

                    populateCustomizeTrip();


                    /*
                     * Now reveal Customize section.
                     */

                    if (customizeSection) {

                        customizeSection.hidden =
                            false;

                        customizeSection.setAttribute(
                            "aria-hidden",
                            "false"
                        );


                        /*
                         * Scroll only AFTER
                         * section is visible.
                         */

                        setTimeout(
                            () => {

                                customizeSection.scrollIntoView({
                                    behavior:
                                        "smooth",

                                    block:
                                        "start"
                                });

                            },
                            50
                        );

                    }

                }
            );

        }
        /* ======================================================
           CONTINUE TO BOOK
        ====================================================== */

        if (customizeContinue) {

            customizeContinue.addEventListener(
                "click",
                () => {

                    /* ==========================================
                       BOOKING SECTION
                    ========================================== */

                    const booking =
                        document.querySelector(
                            "#booking"
                        );

                    const bookingForm =
                        document.querySelector(
                            "#bookingForm"
                        );


                    if (!booking || !bookingForm) {

                        console.error(
                            "Booking section or booking form not found."
                        );

                        return;

                    }


                    /* ==========================================
                       SELECTED DESTINATIONS
                    ========================================== */

                    const destinationNames =
                        state.locations
                            .map(
                                (location) =>
                                    locationData[
                                        location
                                    ]?.name
                            )
                            .filter(Boolean);


                    const destinationValue =
                        destinationNames.join(
                            " → "
                        );


                    /* ==========================================
                       SELECTED DATA
                    ========================================== */

                    const duration =
                        durationData[
                        state.duration
                        ];

                    const traveller =
                        travellerData[
                        state.traveller
                        ];


                    const experienceNames =
                        state.experiences
                            .map(
                                (experience) =>
                                    experienceData[
                                        experience
                                    ]?.label
                            )
                            .filter(Boolean);


                    /* ==========================================
                       BOOKING FORM FIELDS
                    ========================================== */

                    const bookingPickup =
                        document.querySelector(
                            "#bookingPickup"
                        );

                    const bookingDestination =
                        document.querySelector(
                            "#bookingDestination"
                        );

                    const bookingTravellers =
                        document.querySelector(
                            "#bookingTravellers"
                        );

                    const bookingVehicle =
                        document.querySelector(
                            "#bookingVehicle"
                        );

                    const bookingTripType =
                        document.querySelector(
                            "#bookingTripType"
                        );

                    const bookingMessage =
                        document.querySelector(
                            "#bookingMessage"
                        );


                    /* ==========================================
                       PICKUP
                    ========================================== */

                    if (
                        bookingPickup &&
                        customizePickup
                    ) {

                        bookingPickup.value =
                            customizePickup.value.trim();

                    }


                    /* ==========================================
                       DESTINATION
                    ========================================== */

                    if (bookingDestination) {

                        bookingDestination.value =
                            destinationValue;

                    }


                    /* ==========================================
                       TRAVELLERS
                    ========================================== */

                    if (bookingTravellers) {

                        const travellerMap = {

                            couple: "1-2",
                            solo: "1-2",
                            student: "1-2",

                            family: "3-4",
                            friends: "3-4",

                            group: "8+"

                        };


                        const travellerValue =
                            travellerMap[
                            state.traveller
                            ];


                        if (
                            travellerValue &&
                            Array.from(
                                bookingTravellers.options
                            ).some(
                                (option) =>
                                    option.value ===
                                    travellerValue
                            )
                        ) {

                            bookingTravellers.value =
                                travellerValue;

                        }

                    }


                    /* ==========================================
                       VEHICLE
                    ========================================== */

                    if (
                        bookingVehicle &&
                        customizeVehicle &&
                        customizeVehicle.value
                    ) {

                        const vehicleValue =
                            customizeVehicle.value;


                        if (
                            Array.from(
                                bookingVehicle.options
                            ).some(
                                (option) =>
                                    option.value ===
                                    vehicleValue
                            )
                        ) {

                            bookingVehicle.value =
                                vehicleValue;

                        }

                    }


                    /* ==========================================
                       TRIP TYPE
                    ========================================== */

                    if (bookingTripType) {

                        const option =
                            Array.from(
                                bookingTripType.options
                            ).find(
                                (item) =>
                                    item.value ===
                                    "Tour Package"
                            );


                        if (option) {

                            bookingTripType.value =
                                option.value;

                        }

                    }


                    /* ==========================================
                       ESCAPE PLANNER SUMMARY
                    ========================================== */

                    const plannerSummary =

                        `Escape Planner Selection:

Traveller: ${traveller?.label ||
                        "Not specified"
                        }

Duration: ${duration?.label ||
                        "Not specified"
                        }

Destinations: ${destinationValue ||
                        "Not specified"
                        }

Experiences: ${experienceNames.join(
                            ", "
                        ) ||
                        "Not specified"
                        }

Preferred Vehicle: ${customizeVehicle?.value ||
                        "Not specified"
                        }

Special Request: ${customizeRequest?.value.trim() ||
                        "None"
                        }`;



                    /* ==========================================
                       SHOW ESCAPE PLAN SUMMARY
                    ========================================== */

                    const bookingEscapeSummary =
                        document.querySelector(
                            "#bookingEscapeSummary"
                        );

                    const bookingEscapeSummaryContent =
                        document.querySelector(
                            "#bookingEscapeSummaryContent"
                        );


                    if (
                        bookingEscapeSummary &&
                        bookingEscapeSummaryContent
                    ) {

                        bookingEscapeSummaryContent.innerHTML = `

        <div class="bookingSummaryItem">

            <span>Travelling with</span>

            <strong>
                ${escapeHTML(
                            traveller?.label ||
                            "Not specified"
                        )}
            </strong>

        </div>


        <div class="bookingSummaryItem">

            <span>Duration</span>

            <strong>
                ${escapeHTML(
                            duration?.label ||
                            "Not specified"
                        )}
            </strong>

        </div>


        <div class="bookingSummaryItem">

            <span>Destinations</span>

            <strong>
                ${escapeHTML(
                            destinationValue ||
                            "Not specified"
                        )}
            </strong>

        </div>


        <div class="bookingSummaryItem">

            <span>Experiences</span>

            <strong>
                ${escapeHTML(
                            experienceNames.join(
                                " • "
                            ) ||
                            "Not specified"
                        )}
            </strong>

        </div>


        <div class="bookingSummaryItem">

            <span>Vehicle</span>

            <strong>
                ${escapeHTML(
                            customizeVehicle?.value ||
                            "Not specified"
                        )}
            </strong>

        </div>


        <div class="bookingSummaryItem">

            <span>Pickup</span>

            <strong>
                ${escapeHTML(
                            customizePickup?.value.trim() ||
                            "Not specified"
                        )}
            </strong>

        </div>

    `;


                        bookingEscapeSummary.hidden =
                            false;

                    }

                    /* ==========================================
                       OPEN EXISTING BOOKING
                    ========================================== */

                    const desktopBookingButton =
                        document.getElementById(
                            "desktopBookingBtn"
                        );

                    const mobileBookingButton =
                        document.getElementById(
                            "mobileBookingBtn"
                        );


                    const bookingButton =
                        window.innerWidth <= 768
                            ? mobileBookingButton
                            : desktopBookingButton;


                    if (bookingButton) {

                        bookingButton.click();

                        return;

                    }


                    /* ==========================================
                       FALLBACK
                    ========================================== */

                    booking.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            );

        }


        /* ======================================================
           VALIDATION
        ====================================================== */

        function validateSelections() {

            let message = "";


            if (!state.traveller) {

                message =
                    "Choose who you're travelling with.";

            }

            else if (!state.duration) {

                message =
                    "Choose how long your trip is.";

            }

            else if (
                !state.experiences.length
            ) {

                message =
                    "Choose at least one experience.";

            }

            else if (
                !state.locations.length
            ) {

                message =
                    "Choose at least one destination.";

            }


            if (!message) {
                return true;
            }


            showValidationMessage(
                message
            );


            return false;

        }


        /* ======================================================
           BUILD RECOMMENDATION
        ====================================================== */

        function buildRecommendation() {

            const duration =
                durationData[
                state.duration
                ];


            const traveller =
                travellerData[
                state.traveller
                ];


            const destinations =
                state.locations
                    .map(
                        (location) =>
                            locationData[
                            location
                            ]
                    )
                    .filter(Boolean);


            const experiences =
                state.experiences
                    .map(
                        (experience) =>
                            experienceData[
                                experience
                            ]?.label
                    )
                    .filter(Boolean);


            if (
                !duration ||
                !traveller ||
                !destinations.length
            ) {
                return;
            }


            /* ==================================================
               TITLE
            ================================================== */

            let title = "";


            if (
                destinations.length === 1
            ) {

                title =
                    `${duration.label} in ${destinations[0].name}`;

            }

            else {

                title =
                    `${duration.label} Kerala Escape`;

            }


            resultTitle.textContent =
                title;


            /* ==================================================
               TAGS
            ================================================== */

            const tags = [
                ...experiences
            ];


            destinations.forEach(
                (destination) => {

                    tags.push(
                        destination.name
                    );

                }
            );


            resultTags.innerHTML =
                tags
                    .map(
                        (tag) =>
                            `<span>${escapeHTML(tag)}</span>`
                    )
                    .join(
                        "<span>•</span>"
                    );


            /* ==================================================
               ITINERARY HIGHLIGHTS
            ================================================== */

            const highlight =
                buildHighlights(
                    destinations
                );


            /* ==================================================
               DETAILS
            ================================================== */

            resultDetails.innerHTML = `

                <div class="findEscapeDetail">

                    <span class="findEscapeDetailIcon">
                        <i class="fa-solid fa-route"></i>
                    </span>

                    <div>

                        <strong>
                            Itinerary Highlights
                        </strong>

                        <p>
                            ${escapeHTML(highlight)}
                        </p>

                    </div>

                </div>


                <div class="findEscapeDetail">

                    <span class="findEscapeDetailIcon">
                        <i class="fa-solid fa-location-dot"></i>
                    </span>

                    <div>

                        <strong>
                            Destinations
                        </strong>

                        <p>
                            ${escapeHTML(
                destinations
                    .map(
                        destination =>
                            destination.name
                    )
                    .join(" • ")
            )}
                        </p>

                    </div>

                </div>


                <div class="findEscapeDetail">

                    <span class="findEscapeDetailIcon">
                        <i class="fa-regular fa-clock"></i>
                    </span>

                    <div>

                        <strong>
                            Duration
                        </strong>

                        <p>
                            ${escapeHTML(
                duration.label
            )}
                            /
                            ${escapeHTML(
                duration.nights
            )}
                        </p>

                    </div>

                </div>


                <div class="findEscapeDetail">

                    <span class="findEscapeDetailIcon">
                        <i class="fa-solid fa-user-group"></i>
                    </span>

                    <div>

                        <strong>
                            Best For
                        </strong>

                        <p>
                            ${escapeHTML(
                traveller.bestFor
            )}
                        </p>

                    </div>

                </div>


                <div class="findEscapeDetail">

                    <span class="findEscapeDetailIcon">
                        <i class="fa-solid fa-wand-magic-sparkles"></i>
                    </span>

                    <div>

                        <strong>
                            Experiences
                        </strong>

                        <p>
                            ${escapeHTML(
                experiences.join(" • ")
            )}
                        </p>

                    </div>

                </div>

            `;


            /* ==================================================
               IMAGE
            ================================================== */

            const firstSelectedLocation =
                planner.querySelector(
                    `.findEscapeLocation[data-value="${CSS.escape(
                        state.locations[0]
                    )}"]`
                );


            const locationImage =
                firstSelectedLocation?.dataset.image;


            if (
                resultImage &&
                locationImage
            ) {

                resultImage.src =
                    locationImage;

            }


            /* ==================================================
               SHOW RECOMMENDATION
               
               IMPORTANT:
               Customize stays hidden.
            ================================================== */

            result.hidden = false;

            result.setAttribute(
                "aria-hidden",
                "false"
            );


            /* ==================================================
               RESULT ANIMATION
            ================================================== */

            if (resultCard) {

                resultCard.classList.remove(
                    "is-updated"
                );


                void resultCard.offsetWidth;


                resultCard.classList.add(
                    "is-updated"
                );

            }

        }


        /* ======================================================
           POPULATE CUSTOMIZE TRIP
        ====================================================== */

        function populateCustomizeTrip() {

            const duration =
                durationData[
                state.duration
                ];


            const traveller =
                travellerData[
                state.traveller
                ];


            const destinations =
                state.locations
                    .map(
                        (location) =>
                            locationData[
                            location
                            ]
                    )
                    .filter(Boolean);


            const experiences =
                state.experiences
                    .map(
                        (experience) =>
                            experienceData[
                                experience
                            ]?.label
                    )
                    .filter(Boolean);


            if (
                !duration ||
                !traveller ||
                !destinations.length
            ) {
                return;
            }


            /* ==================================================
               TITLE
            ================================================== */

            if (customizeTitle) {

                if (
                    destinations.length === 1
                ) {

                    customizeTitle.textContent =
                        `${duration.label} in ${destinations[0].name}`;

                }

                else {

                    customizeTitle.textContent =
                        `${duration.label} Kerala Escape`;

                }

            }


            /* ==================================================
               DESTINATIONS
            ================================================== */

            if (customizeDestinations) {

                customizeDestinations.innerHTML =
                    destinations
                        .map(
                            (destination) => `

                                <span
                                    class="customizeTripDestination">

                                    ${escapeHTML(
                                destination.name
                            )}

                                </span>

                            `
                        )
                        .join("");

            }


            /* ==================================================
               DURATION
            ================================================== */

            if (customizeDuration) {

                customizeDuration.textContent =
                    `${duration.label} / ${duration.nights}`;

            }


            /* ==================================================
               TRAVELLER
            ================================================== */

            if (customizeTraveller) {

                customizeTraveller.textContent =
                    traveller.label;

            }


            /* ==================================================
               EXPERIENCES
            ================================================== */

            if (customizeExperiences) {

                customizeExperiences.innerHTML =
                    experiences
                        .map(
                            (experience) => `

                                <span
                                    class="customizeTripTag">

                                    ${escapeHTML(
                                experience
                            )}

                                </span>

                            `
                        )
                        .join("");

            }

        }


        /* ======================================================
           BUILD DESTINATION HIGHLIGHTS
        ====================================================== */

        function buildHighlights(
            destinations
        ) {

            return destinations
                .map(
                    (destination) =>
                        destination.highlights
                )
                .join(" ");

        }


        /* ======================================================
           SINGLE SELECTION
        ====================================================== */

        function setSingleSelection(
            elements,
            selectedElement
        ) {

            elements.forEach(
                (element) => {

                    const selected =
                        element ===
                        selectedElement;


                    element.classList.toggle(
                        "is-selected",
                        selected
                    );


                    element.setAttribute(
                        "aria-pressed",
                        selected
                            ? "true"
                            : "false"
                    );

                }
            );

        }


        /* ======================================================
           MULTIPLE SELECTION
        ====================================================== */

        function toggleMultipleSelection(
            element,
            stateArray
        ) {

            const value =
                element.dataset.value;


            const index =
                stateArray.indexOf(
                    value
                );


            if (index !== -1) {

                stateArray.splice(
                    index,
                    1
                );


                element.classList.remove(
                    "is-selected"
                );

                element.setAttribute(
                    "aria-pressed",
                    "false"
                );

            }

            else {

                stateArray.push(
                    value
                );


                element.classList.add(
                    "is-selected"
                );

                element.setAttribute(
                    "aria-pressed",
                    "true"
                );

            }

        }


        /* ======================================================
           GET SINGLE SELECTED VALUE
        ====================================================== */

        function getSelectedValue(
            elements
        ) {

            const selected =
                Array.from(
                    elements
                ).find(
                    (element) =>
                        element.classList.contains(
                            "is-selected"
                        )
                );


            return selected
                ? selected.dataset.value
                : null;

        }


        /* ======================================================
           GET MULTIPLE SELECTED VALUES
        ====================================================== */

        function getSelectedValues(
            elements
        ) {

            return Array.from(
                elements
            )
                .filter(
                    (element) =>
                        element.classList.contains(
                            "is-selected"
                        )
                )
                .map(
                    (element) =>
                        element.dataset.value
                );

        }


        /* ======================================================
           VALIDATION MESSAGE
        ====================================================== */

        function showValidationMessage(
            message
        ) {

            let messageElement =
                planner.querySelector(
                    ".findEscapeValidation"
                );


            if (!messageElement) {

                messageElement =
                    document.createElement(
                        "div"
                    );

                messageElement.className =
                    "findEscapeValidation";

                messageElement.setAttribute(
                    "role",
                    "status"
                );


                findButton
                    .parentElement
                    .appendChild(
                        messageElement
                    );

            }


            messageElement.textContent =
                message;


            messageElement.classList.add(
                "is-visible"
            );


            clearTimeout(
                messageElement._hideTimer
            );


            messageElement._hideTimer =
                setTimeout(
                    () => {

                        messageElement.classList.remove(
                            "is-visible"
                        );

                    },
                    3000
                );

        }


        /* ======================================================
           ESCAPE HTML
        ====================================================== */

        function escapeHTML(
            value
        ) {

            return String(value)

                .replace(
                    /&/g,
                    "&amp;"
                )

                .replace(
                    /</g,
                    "&lt;"
                )

                .replace(
                    />/g,
                    "&gt;"
                )

                .replace(
                    /"/g,
                    "&quot;"
                )

                .replace(
                    /'/g,
                    "&#039;"
                );

        }

    }


    /* ==========================================================
       INIT
    ========================================================== */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initFindEscape,
            {
                once: true
            }
        );

    }

    else {

        initFindEscape();

    }

})();   