import { useMember } from '@/integrations';
import { motion } from 'framer-motion';
import { User, Mail, Calendar } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function ProfilePage() {
  const { member } = useMember();

  const formatDate = (date?: Date) => {
    if (!date) return 'N/A';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-primary text-primary-foreground py-24">
      <div className="max-w-[100rem] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-heading text-5xl md:text-6xl italic mb-12 text-center">
            Your Profile
          </h1>

          <div className="max-w-3xl mx-auto">
            <div className="bg-secondary text-secondary-foreground rounded-3xl p-8 md:p-12">
              {/* Profile Photo */}
              <div className="flex justify-center mb-8">
                {member?.profile?.photo?.url ? (
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary">
                    <Image
                      src={member.profile.photo.url}
                      alt={member.profile.nickname || 'Profile photo'}
                      className="w-full h-full object-cover"
                      width={128}
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center border-4 border-primary">
                    <User className="w-16 h-16 text-primary" />
                  </div>
                )}
              </div>

              {/* Profile Information */}
              <div className="space-y-6">
                <div className="border-b border-secondary-foreground/10 pb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <User className="w-5 h-5 text-secondary-foreground/60" />
                    <span className="font-paragraph text-sm uppercase tracking-wider text-secondary-foreground/60">
                      Name
                    </span>
                  </div>
                  <p className="font-heading text-2xl italic ml-8">
                    {member?.profile?.nickname || 
                     `${member?.contact?.firstName || ''} ${member?.contact?.lastName || ''}`.trim() || 
                     'Not provided'}
                  </p>
                </div>

                <div className="border-b border-secondary-foreground/10 pb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-5 h-5 text-secondary-foreground/60" />
                    <span className="font-paragraph text-sm uppercase tracking-wider text-secondary-foreground/60">
                      Email
                    </span>
                  </div>
                  <p className="font-paragraph text-lg ml-8">
                    {member?.loginEmail || 'Not provided'}
                  </p>
                  {member?.loginEmailVerified && (
                    <p className="font-paragraph text-sm text-secondary-foreground/60 ml-8 mt-1">
                      ✓ Verified
                    </p>
                  )}
                </div>

                <div className="border-b border-secondary-foreground/10 pb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-5 h-5 text-secondary-foreground/60" />
                    <span className="font-paragraph text-sm uppercase tracking-wider text-secondary-foreground/60">
                      Member Since
                    </span>
                  </div>
                  <p className="font-paragraph text-lg ml-8">
                    {formatDate(member?._createdDate)}
                  </p>
                </div>

                {member?.profile?.title && (
                  <div className="pb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-paragraph text-sm uppercase tracking-wider text-secondary-foreground/60">
                        Title
                      </span>
                    </div>
                    <p className="font-paragraph text-lg ml-8">
                      {member.profile.title}
                    </p>
                  </div>
                )}

                {member?.contact?.phones && member.contact.phones.length > 0 && (
                  <div className="pb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-paragraph text-sm uppercase tracking-wider text-secondary-foreground/60">
                        Phone
                      </span>
                    </div>
                    <p className="font-paragraph text-lg ml-8">
                      {member.contact.phones[0]}
                    </p>
                  </div>
                )}
              </div>

              {/* Account Status */}
              <div className="mt-8 pt-8 border-t border-secondary-foreground/10">
                <div className="flex items-center justify-between">
                  <span className="font-paragraph text-sm uppercase tracking-wider text-secondary-foreground/60">
                    Account Status
                  </span>
                  <span className="font-paragraph text-sm px-4 py-2 rounded-full bg-primary/10">
                    {member?.status || 'Active'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
