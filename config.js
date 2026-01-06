/**
 * ByteWorks UK Ltd - Business Configuration File
 * Central configuration for all business contact details and settings
 * 
 * This file contains all business information that appears across the website.
 * Modify the values below to update contact details site-wide.
 * Last Updated: January 2024
 */

const BUSINESS_CONFIG = {
    // Business Identification
    name: 'ByteWorks UK Ltd',
    legalName: 'ByteWorks UK Ltd',
    
    // Contact Information
    phone: '+44 7347939454',
    email: 'info@byteworksuk.co.uk',
    
    // Physical Address
    address: {
        line1: 'The Tea Factory',
        line2: '17 Lower Regent Street',
        city: 'Leeds',
        postcode: 'LS1 5DL',
        country: 'United Kingdom',
        
        // Full formatted address string
        full: 'The Tea Factory, 17 Lower Regent Street, Leeds, LS1 5DL, United Kingdom'
    },
    
    // Website Information
    website: {
        url: 'https://www.byteworksuk.co.uk',
        domain: 'byteworksuk.co.uk'
    },
    
    // Business Hours
    businessHours: {
        monday: '09:00 - 17:30',
        tuesday: '09:00 - 17:30',
        wednesday: '09:00 - 17:30',
        thursday: '09:00 - 17:30',
        friday: '09:00 - 17:30',
        saturday: 'Closed',
        sunday: 'Closed'
    },
    
    // Copyright Year
    copyrightYear: new Date().getFullYear(),
    
    // Response Times (in hours)
    responseTimes: {
        phone: 1,
        email: 4,
        urgent: 'Immediate'
    }
};

/**
 * UTILITY FUNCTION: Get phone number
 * Returns the business phone number
 */
function getPhoneNumber() {
    return BUSINESS_CONFIG.phone;
}

/**
 * UTILITY FUNCTION: Get email
 * Returns the business email address
 */
function getEmail() {
    return BUSINESS_CONFIG.email;
}

/**
 * UTILITY FUNCTION: Get full address
 * Returns the complete formatted address
 */
function getFullAddress() {
    return BUSINESS_CONFIG.address.full;
}

/**
 * UTILITY FUNCTION: Get business name
 * Returns the legal business name
 */
function getBusinessName() {
    return BUSINESS_CONFIG.legalName;
}

/**
 * UTILITY FUNCTION: Get website URL
 * Returns the business website URL
 */
function getWebsiteURL() {
    return BUSINESS_CONFIG.website.url;
}

/**
 * UTILITY FUNCTION: Populate phone numbers on page load
 * Automatically updates all elements with data-phone-field attribute
 */
function updatePhoneNumbersOnPage() {
    const phoneElements = document.querySelectorAll('[data-phone-field]');
    phoneElements.forEach(element => {
        element.textContent = BUSINESS_CONFIG.phone;
        if (element.tagName === 'A') {
            element.href = 'tel:' + BUSINESS_CONFIG.phone;
        }
    });
}

/**
 * UTILITY FUNCTION: Populate emails on page load
 * Automatically updates all elements with data-email-field attribute
 */
function updateEmailsOnPage() {
    const emailElements = document.querySelectorAll('[data-email-field]');
    emailElements.forEach(element => {
        element.textContent = BUSINESS_CONFIG.email;
        if (element.tagName === 'A') {
            element.href = 'mailto:' + BUSINESS_CONFIG.email;
        }
    });
}

/**
 * UTILITY FUNCTION: Populate business address on page load
 * Automatically updates all elements with data-address-field attribute
 */
function updateAddressOnPage() {
    const addressElements = document.querySelectorAll('[data-address-field]');
    addressElements.forEach(element => {
        element.textContent = BUSINESS_CONFIG.address.full;
    });
}

/**
 * UTILITY FUNCTION: Populate business name on page load
 * Automatically updates all elements with data-business-name attribute
 */
function updateBusinessNameOnPage() {
    const nameElements = document.querySelectorAll('[data-business-name]');
    nameElements.forEach(element => {
        element.textContent = BUSINESS_CONFIG.legalName;
    });
}

/**
 * UTILITY FUNCTION: Update copyright year dynamically
 * Automatically updates all elements with data-copyright-year attribute
 */
function updateCopyrightYearOnPage() {
    const copyrightElements = document.querySelectorAll('[data-copyright-year]');
    copyrightElements.forEach(element => {
        element.textContent = BUSINESS_CONFIG.copyrightYear;
    });
}

/**
 * UTILITY FUNCTION: Populate website URL on page load
 * Automatically updates all elements with data-website attribute
 */
function updateWebsiteOnPage() {
    const websiteElements = document.querySelectorAll('[data-website]');
    websiteElements.forEach(element => {
        element.textContent = BUSINESS_CONFIG.website.url;
        if (element.tagName === 'A') {
            element.href = BUSINESS_CONFIG.website.url;
        }
    });
}

/**
 * MAIN INITIALIZATION FUNCTION
 * Call this function on page load to update all business information
 */
function initializeBusinessConfig() {
    // Update all dynamic content on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            updatePhoneNumbersOnPage();
            updateEmailsOnPage();
            updateAddressOnPage();
            updateBusinessNameOnPage();
            updateCopyrightYearOnPage();
            updateWebsiteOnPage();
        });
    } else {
        // DOM already loaded
        updatePhoneNumbersOnPage();
        updateEmailsOnPage();
        updateAddressOnPage();
        updateBusinessNameOnPage();
        updateCopyrightYearOnPage();
        updateWebsiteOnPage();
    }
}

// Auto-initialize on script load
initializeBusinessConfig();

/**
 * INSTRUCTION FOR USE:
 * 
 * To modify business contact details:
 * 1. Edit the BUSINESS_CONFIG object above
 * 2. Update the relevant fields (phone, email, address, etc.)
 * 3. All pages that include this script will automatically update
 * 
 * To use in HTML pages:
 * 1. Include this script: <script src="config.js"></script>
 * 2. Use data attributes in HTML:
 *    - <span data-phone-field></span>  (for phone numbers)
 *    - <span data-email-field></span>  (for emails)
 *    - <span data-address-field></span> (for full address)
 *    - <span data-business-name></span> (for company name)
 *    - <span data-copyright-year></span> (for copyright year)
 *    - <span data-website></span>       (for website URL)
 * 
 * Alternative: Access values directly in JavaScript:
 * - BUSINESS_CONFIG.phone
 * - BUSINESS_CONFIG.email
 * - BUSINESS_CONFIG.address.full
 * - BUSINESS_CONFIG.legalName
 * - getPhoneNumber()
 * - getEmail()
 * - getFullAddress()
 * - getBusinessName()
 * - getWebsiteURL()
 */


