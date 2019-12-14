<template>
    <v-container>
        <v-card  flat class="px-0 mt-0 mb-5 ">
            <v-toolbar  flat card class="cardHeader pb-2 pt-2">
            <v-toolbar-title>
                <span   >My account </span>
            </v-toolbar-title>
        </v-toolbar>
            <v-card-text class="px-0 padding-ver-0">
        <v-expansion-panels >
            <v-expansion-panel
                    v-for="(item,i) in myAccountSettings"
                    :key="i"
            >
                <v-expansion-panel-header>
                 <div> <v-icon class="mr-3">{{item.icon}}</v-icon>
                    {{item.label}}</div>

                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-card-text  class="px-0 mt-0 mb-0 padding-ver-0">
                        <v-flex ref='phone' v-if="item.key === 'phone_number'" sm6 class="mx-3">
                            <v-form v-model="isPhoneValid" lazy-validation>
                                <span>Change Your Phone Number </span>
                                <v-text-field
                                        :rules="[formRules.required, formRules.digitsOnly, formRules.length_10, formRules.cell_phone]"
                                        v-model="userProfile.phone"
                                        label="phone"
                                        append-icon="phone">
                                </v-text-field>
                                <v-btn
                                        @click="changePhoneNumber"
                                        color="primary"
                                        :disabled="!isPhoneValid"
                                >save
                                </v-btn>
                            </v-form>
                        </v-flex>
                        <v-flex v-if="item.key === 'password'" sm6 class="mx-3">
                            <v-form ref='password' v-model="isPasswordValid" lazy-validation>
                                <span>Change Your Password </span>
                                <v-text-field
                                        v-model="currentPassword"
                                        :rules="[
                                                formRules.min6,
                                                formRules.max15,
                                                formRules.passwordChars,
                                                formRules.oneLowerCase,
                                                formRules.oneUpperCase,
                                                formRules.oneDigit,
                                                formRules.oneSpecialChar,
                                            ]"
                                        :error-messages="errors"
                                        aria-label="Password"
                                        autocomplete="on"
                                        :append-icon="showPass1 ? 'visibility_off' : 'visibility'"
                                        :type="showPass1 ? 'text' : 'password'"
                                        label="Current Password"
                                        @click:append="showPass1 = !showPass1"
                                >
                                </v-text-field>
                                <v-text-field
                                        :rules="[
                                                formRules.min6,
                                                formRules.max15,
                                                formRules.passwordChars,
                                                formRules.oneLowerCase,
                                                formRules.oneUpperCase,
                                                formRules.oneDigit,
                                                formRules.oneSpecialChar,
                                            ]"
                                        aria-label="Password"
                                        :append-icon="showPass2 ? 'visibility_off' : 'visibility'"
                                        autocomplete="on"
                                        v-model="newPassword"
                                        :type="showPass2 ? 'text' : 'password'"
                                        label="New Password"
                                        @click:append="showPass2 = !showPass2"
                                >
                                </v-text-field>
                                <v-text-field
                                        :rules="[

                                                formRules.min6,
                                                formRules.max15,
                                                formRules.passwordChars,
                                                formRules.oneLowerCase,
                                                formRules.oneUpperCase,
                                                formRules.oneDigit,
                                                formRules.oneSpecialChar,
                                                formRules.passwordConfirmation(newPasswordConfirmation, newPassword)
                                            ]"
                                        v-model="newPasswordConfirmation"
                                        aria-label="Password"
                                        :append-icon="showPass3 ? 'visibility_off' : 'visibility'"
                                        autocomplete="on"
                                        :type="showPass3 ? 'text' : 'password'"
                                        label="New Password Confirmation"
                                        @click:append="showPass3 = !showPass3">
                                </v-text-field>
                                <v-btn
                                        @click="changePassword"
                                        color="primary"
                                        :disabled="(!newPassword || !newPasswordConfirmation || !currentPassword || isClicked)"
                                >save
                                </v-btn>
                            </v-form>
                        </v-flex>
                      </v-card-text>
                     </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>
            </v-card-text>
        </v-card>
        <v-card  flat class="px-0 mt-0 mb-5 padding-ver-0">
            <v-toolbar dense flat card class="cardHeader pb-2 pt-2">
                <v-toolbar-title class="mb-5">
                    <span >Site Preferences </span> <span class="small"></span>
                </v-toolbar-title>
            </v-toolbar>
            <v-card-text class="px-0 padding-ver-0">
                <v-expansion-panels>
                    <v-expansion-panel
                            v-for="(item,i) in sitePreferencesSettings"
                            :key="i">
                        <v-expansion-panel-header>
                            <div> <v-icon class="mr-3">{{item.icon}}</v-icon>
                                {{item.label}}</div>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-card-text  class="px-0 mt-0 mb-0 padding-ver-0">
                                <v-flex v-if="item.key === 'language'">
                                    <v-card-title class="pb-3 subheading">
                                        <span> Chose Your Site Prefer Languages </span>
                                    </v-card-title>
                                    <v-toolbar flat>
                                        English
                                        <v-spacer></v-spacer>
                                        <div>
                                            <v-switch v-model="isEnglishLangSelected" color="primary" ></v-switch>
                                        </div>
                                    </v-toolbar>
                                    <v-toolbar flat>
                                        עברית
                                        <v-spacer></v-spacer>
                                        <div>
                                            <v-switch  v-model="isHebrewLangSelected" color="primary"></v-switch>
                                        </div>
                                    </v-toolbar>
                                </v-flex>
                            </v-card-text>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-card-text>
        </v-card>
        <v-card flat class="px-0 mt-0 mb-0 padding-ver-0">
            <v-toolbar dense flat card class="cardHeader pb-2 pt-2">
                <v-toolbar-title class="mb-5">
                    <span >Communication </span> <span class="small"></span>
                </v-toolbar-title>
            </v-toolbar>
            <v-card-text class="px-0 padding-ver-0">
                <v-expansion-panels>
                    <v-expansion-panel
                            v-for="(item,i) in communicationSettings"
                            :key="i">
                        <v-expansion-panel-header>
                            <div> <v-icon class="mr-3">{{item.icon}}</v-icon>
                                {{item.label}}</div>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <v-card-text  class="px-0 mt-0 mb-0 padding-ver-0">
                            </v-card-text>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-card-text>
        </v-card>






    </v-container>
</template>

<script>
const phonePrefixes = ['050', '051', '052', '053', '054', '055', '058'];


export default {
    name: 'settingsCard',
    props: ['user'],
    data() {
        return {
            userProfile: { phone: ''},
            errors: [],
            isPhoneValid: false,
            isPasswordValid: false,
            isEnglishLangSelected: false,
            isHebrewLangSelected: false,
            showPass1: false,
            showPass2: false,
            showPass3: false,
            isClicked: false,
            phonePrefixes: phonePrefixes,
            currentPassword : '',
            newPassword : '',
            newPasswordConfirmation: '',
            formRules: {
                required: value => !!value || 'Required.',
                min6: v => (v && v.length >= 6) || 'Min 6 Characters.',
                max15: v => (v && v.length <= 15) || 'Max 15 Characters.',
                digitsOnly: v => RegExp('^[0-9]+$').test(v) || 'Only digits allowed.',
                length_10: v => (v && v.length === 10) || 'Length must be exactly 10 digits',
                passwordChars: v => RegExp('^[0-9a-zA-Z~!@#$%^&*()_+.]+$').test(v) || 'Only alphanumeric characters (letters A-Z, numbers 0-9) and these special characters ~!@#$%^&*()_+..',
                oneDigit: v => RegExp('[0-9]').test(v) || 'One digit required.',
                oneLowerCase: v => RegExp('[a-z]').test(v) || 'Lowercase letter.',
                oneUpperCase: v => RegExp('[A-Z]').test(v) || 'Uppercase letter.',
                oneSpecialChar: v => RegExp('[~!@#$%^&*()_+.]').test(v) || 'Special character.',
                cell_phone: v => (v && v.length > 3 && phonePrefixes.includes(v.substring(0, 3))) || 'Invalid phone provider',
                passwordConfirmation:(first, second) => first === second || 'Password must match!'
            },
            // @todo : implement Identification and Close my account UI and functionality
            myAccountSettings:[
                {
                    label:' Phone Number',
                    key : 'phone_number',
                    icon:'person_pin'
                },
                {
                    label:' Password',
                    key : 'password',
                    icon:'vpn_key'
                },
                {
                    label:' Identification',
                    key : 'user_name',
                    icon:'perm_identity'
                },
                {
                    label:' Close my account',
                    key : 'user_name',
                    icon:'delete'
                }
            ],
            // @todo : implement Language & Formats & Notifications - UI and functionality
            sitePreferencesSettings:[
                {
                    label: 'Language',
                    key :  'language',
                    icon : 'language'
                },
                {
                    label: 'Formats',
                    key :  'formats',
                    icon : 'sort'
                },
                {
                    label: 'Notifications',
                    key :  'notifications',
                    icon : 'notifications'
                }

            ],
            // @todo : implement Video & Chat - UI and functionality
            communicationSettings: [
                {
                    label: 'Video call',
                    icon : 'video_call'
                },
                {
                    label: 'Chat',
                    icon : 'chat'
                }

            ]
        };
    },
    methods: {
        getUserProfile() {
        },
        changePhoneNumber() {
        },
        changePassword() {
        }
    },
    created() {
        this.getUserProfile();
    },
    watch: {
        isHebrewLangSelected() {
            this.isEnglishLangSelected = this.isHebrewLangSelected === false;
        },
        isEnglishLangSelected() {
            this.isHebrewLangSelected = this.isEnglishLangSelected === false;
        }
    }
};
</script>
